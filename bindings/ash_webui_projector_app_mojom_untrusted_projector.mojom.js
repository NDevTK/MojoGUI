// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
 // Module: ash.projector.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.projector = mojo.internal.bindings.ash.projector || {};
mojo.internal.bindings.ash.projector.mojom = mojo.internal.bindings.ash.projector.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler = {};
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandler';
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage = {};
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageSpec = { $ : {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPage';
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory = {};
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Interface: UntrustedProjectorPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParams', [
      mojo.internal.StructField('arg_precondition', 0, 0, mojo.internal.bindings.ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParams', [
      mojo.internal.StructField('arg_should_download', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParams', [
      mojo.internal.StructField('arg_triggered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParams', [
      mojo.internal.StructField('arg_pending_screencasts', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_Params', [
      mojo.internal.StructField('arg_storage_dir_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_method', 8, 0, mojo.internal.bindings.ash.projector.mojom.RequestTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_body', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_headers', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_account_email', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_use_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_api_key', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.ash.projector.mojom.XhrResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParams', [
      mojo.internal.StructField('arg_accounts', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.projector.mojom.AccountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_Params', [
      mojo.internal.StructField('arg_video_file_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.projector.mojom.GetVideoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNewScreencastPrecondition() {
    return this.$.getNewScreencastPrecondition();
  }
  shouldDownloadSoda() {
    return this.$.shouldDownloadSoda();
  }
  installSoda() {
    return this.$.installSoda();
  }
  getPendingScreencasts() {
    return this.$.getPendingScreencasts();
  }
  getUserPref(arg_pref) {
    return this.$.getUserPref(arg_pref);
  }
  setUserPref(arg_pref, arg_value) {
    return this.$.setUserPref(arg_pref, arg_value);
  }
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  startProjectorSession(arg_storage_dir_name) {
    return this.$.startProjectorSession(arg_storage_dir_name);
  }
  sendXhr(arg_url, arg_method, arg_request_body, arg_use_credentials, arg_use_api_key, arg_headers, arg_account_email) {
    return this.$.sendXhr(arg_url, arg_method, arg_request_body, arg_use_credentials, arg_use_api_key, arg_headers, arg_account_email);
  }
  getAccounts() {
    return this.$.getAccounts();
  }
  getVideo(arg_video_file_id, arg_resource_key) {
    return this.$.getVideo(arg_video_file_id, arg_resource_key);
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPageHandler', [
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

  getNewScreencastPrecondition() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec,
      [],
      false);
  }

  shouldDownloadSoda() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec,
      [],
      false);
  }

  installSoda() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec,
      [],
      false);
  }

  getPendingScreencasts() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec,
      [],
      false);
  }

  getUserPref(arg_pref) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec,
      [arg_pref],
      false);
  }

  setUserPref(arg_pref, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec,
      [arg_pref, arg_value],
      false);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  startProjectorSession(arg_storage_dir_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec,
      [arg_storage_dir_name],
      false);
  }

  sendXhr(arg_url, arg_method, arg_request_body, arg_use_credentials, arg_use_api_key, arg_headers, arg_account_email) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec,
      [arg_url, arg_method, arg_request_body, arg_use_credentials, arg_use_api_key, arg_headers, arg_account_email],
      false);
  }

  getAccounts() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getVideo(arg_video_file_id, arg_resource_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec,
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec,
      [arg_video_file_id, arg_resource_key],
      false);
  }

};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPageHandler', [
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
        
        // Try Method 0: GetNewScreencastPrecondition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewScreencastPrecondition (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShouldDownloadSoda
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldDownloadSoda (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallSoda
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallSoda (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPendingScreencasts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPendingScreencasts (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserPref (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserPref (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartProjectorSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartProjectorSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendXhr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendXhr (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAccounts (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewScreencastPrecondition');
          const result = this.impl.getNewScreencastPrecondition();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNewScreencastPrecondition FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldDownloadSoda');
          const result = this.impl.shouldDownloadSoda();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldDownloadSoda FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installSoda');
          const result = this.impl.installSoda();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallSoda FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPendingScreencasts');
          const result = this.impl.getPendingScreencasts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPendingScreencasts FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserPref');
          const result = this.impl.getUserPref(params.arg_pref);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserPref FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserPref');
          const result = this.impl.setUserPref(params.arg_pref, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUserPref FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFeedbackDialog FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startProjectorSession');
          const result = this.impl.startProjectorSession(params.arg_storage_dir_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartProjectorSession FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendXhr');
          const result = this.impl.sendXhr(params.arg_url, params.arg_method, params.arg_request_body, params.arg_use_credentials, params.arg_use_api_key, params.arg_headers, params.arg_account_email);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendXhr FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAccounts');
          const result = this.impl.getAccounts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAccounts FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideo');
          const result = this.impl.getVideo(params.arg_video_file_id, params.arg_resource_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVideo FAILED:', e));
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

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerReceiver;

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerPtr = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemote;
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRequest = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver;


// Interface: UntrustedProjectorPage
mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_Params', [
      mojo.internal.StructField('arg_precondition', 0, 0, mojo.internal.bindings.ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_Params', [
      mojo.internal.StructField('arg_progress', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_Params', [
      mojo.internal.StructField('arg_pending_screencasts', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewScreencastPreconditionChanged(arg_precondition) {
    return this.$.onNewScreencastPreconditionChanged(arg_precondition);
  }
  onSodaInstallProgressUpdated(arg_progress) {
    return this.$.onSodaInstallProgressUpdated(arg_progress);
  }
  onSodaInstalled() {
    return this.$.onSodaInstalled();
  }
  onSodaInstallError() {
    return this.$.onSodaInstallError();
  }
  onScreencastsStateChange(arg_pending_screencasts) {
    return this.$.onScreencastsStateChange(arg_pending_screencasts);
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewScreencastPreconditionChanged(arg_precondition) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec,
      null,
      [arg_precondition],
      false);
  }

  onSodaInstallProgressUpdated(arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec,
      null,
      [arg_progress],
      false);
  }

  onSodaInstalled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  onSodaInstallError() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec,
      null,
      [],
      false);
  }

  onScreencastsStateChange(arg_pending_screencasts) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec,
      null,
      [arg_pending_screencasts],
      false);
  }

};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPage', [
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
        
        // Try Method 0: OnNewScreencastPreconditionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewScreencastPreconditionChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSodaInstallProgressUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstallProgressUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSodaInstalled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstalled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSodaInstallError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSodaInstallError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnScreencastsStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreencastsStateChange (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewScreencastPreconditionChanged');
          const result = this.impl.onNewScreencastPreconditionChanged(params.arg_precondition);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstallProgressUpdated');
          const result = this.impl.onSodaInstallProgressUpdated(params.arg_progress);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstalled');
          const result = this.impl.onSodaInstalled();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSodaInstallError');
          const result = this.impl.onSodaInstallError();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreencastsStateChange');
          const result = this.impl.onScreencastsStateChange(params.arg_pending_screencasts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageReceiver = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageReceiver;

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPagePtr = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemote;
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRequest = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(arg_handler, arg_page) {
    return this.$.create(arg_handler, arg_page);
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(arg_handler, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec,
      null,
      [arg_handler, arg_page],
      false);
  }

};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.projector.mojom.UntrustedProjectorPageHandlerFactory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_handler, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver;

mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote;
mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = mojo.internal.bindings.ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

