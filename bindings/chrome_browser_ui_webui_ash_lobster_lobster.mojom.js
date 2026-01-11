// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/lobster/lobster.mojom
 // Module: lobster.mojom

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
 

 mojo.internal.bindings.lobster = mojo.internal.bindings.lobster || {};
mojo.internal.bindings.lobster.mojom = mojo.internal.bindings.lobster.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.lobster.mojom.StatusCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.lobster.mojom.WebUIMetricEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.lobster.mojom.ResponseSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.CandidateSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.ErrorSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.FeedbackPreviewSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler = {};
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerSpec = { $ : {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler.$interfaceName = 'lobster.mojom.UntrustedLobsterPageHandler';
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec = { $: {} };

// Enum: StatusCode
mojo.internal.bindings.lobster.mojom.StatusCode = {
  kUnknown: 0,
  kOk: 1,
  kBlockedOutputs: 2,
  kNoInternetConnection: 3,
  kResourceExhausted: 4,
  kInvalidArgument: 5,
  kBackendFailure: 6,
  kUnsupportedLanguage: 7,
  kRestrictedRegion: 8,
  MinVersion: 8,
};

// Enum: WebUIMetricEvent
mojo.internal.bindings.lobster.mojom.WebUIMetricEvent = {
  kUnknown: 0,
  kQueryPageImpression: 1,
  kRequestInitialCandidates: 2,
  kRequestInitialCandidatesSuccess: 3,
  kRequestInitialCandidatesError: 4,
  kInitialCandidatesImpression: 5,
  kRequestMoreCandidates: 6,
  kRequestMoreCandidatesSuccess: 7,
  kRequestMoreCandidatesError: 8,
  kMoreCandidatesAppended: 9,
  kFeedbackThumbsUp: 10,
  kFeedbackThumbsDown: 11,
};

// Union: Response
mojo.internal.Union(
    mojo.internal.bindings.lobster.mojom.ResponseSpec, 'lobster.mojom.Response', {
      'arg_candidates': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.lobster.mojom.CandidateSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.lobster.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: Candidate
mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.CandidateSpec, 'lobster.mojom.Candidate', [
      mojo.internal.StructField('arg_data_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Error
mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.ErrorSpec, 'lobster.mojom.Error', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.bindings.lobster.mojom.StatusCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeedbackPreview
mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.FeedbackPreviewSpec, 'lobster.mojom.FeedbackPreview', [
      mojo.internal.StructField('arg_fields', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_preview_data_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UntrustedLobsterPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_num_candidates', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.lobster.mojom.ResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_Params', [
      mojo.internal.StructField('arg_candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_Params', [
      mojo.internal.StructField('arg_candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_Params', [
      mojo.internal.StructField('arg_candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_Params', [
      mojo.internal.StructField('arg_candidate_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParams', [
      mojo.internal.StructField('arg_preview', 0, 0, mojo.internal.bindings.lobster.mojom.FeedbackPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_Params', [
      mojo.internal.StructField('arg_description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_candidate_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_Params', [
      mojo.internal.StructField('arg_metric_event', 0, 0, mojo.internal.bindings.lobster.mojom.WebUIMetricEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec, 'lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lobster.mojom.UntrustedLobsterPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestCandidates(arg_query, arg_num_candidates) {
    return this.$.requestCandidates(arg_query, arg_num_candidates);
  }
  downloadCandidate(arg_candidate_id) {
    return this.$.downloadCandidate(arg_candidate_id);
  }
  commitAsInsert(arg_candidate_id) {
    return this.$.commitAsInsert(arg_candidate_id);
  }
  commitAsDownload(arg_candidate_id) {
    return this.$.commitAsDownload(arg_candidate_id);
  }
  previewFeedback(arg_candidate_id) {
    return this.$.previewFeedback(arg_candidate_id);
  }
  submitFeedback(arg_candidate_id, arg_description) {
    return this.$.submitFeedback(arg_candidate_id, arg_description);
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  emitMetricEvent(arg_metric_event) {
    return this.$.emitMetricEvent(arg_metric_event);
  }
  openUrlInNewWindow(arg_url) {
    return this.$.openUrlInNewWindow(arg_url);
  }
};

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('lobster.mojom.UntrustedLobsterPageHandler', [
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
    ]);
  }

  requestCandidates(arg_query, arg_num_candidates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec,
      [arg_query, arg_num_candidates],
      false);
  }

  downloadCandidate(arg_candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec,
      [arg_candidate_id],
      false);
  }

  commitAsInsert(arg_candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec,
      [arg_candidate_id],
      false);
  }

  commitAsDownload(arg_candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec,
      [arg_candidate_id],
      false);
  }

  previewFeedback(arg_candidate_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec,
      [arg_candidate_id],
      false);
  }

  submitFeedback(arg_candidate_id, arg_description) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec,
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec,
      [arg_candidate_id, arg_description],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  emitMetricEvent(arg_metric_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec,
      null,
      [arg_metric_event],
      false);
  }

  openUrlInNewWindow(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec,
      null,
      [arg_url],
      false);
  }

};

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lobster.mojom.UntrustedLobsterPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('lobster.mojom.UntrustedLobsterPageHandler', [
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
        
        // Try Method 0: RequestCandidates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCandidates (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DownloadCandidate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DownloadCandidate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CommitAsInsert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitAsInsert (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CommitAsDownload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitAsDownload (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: PreviewFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviewFeedback (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SubmitFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitFeedback (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EmitMetricEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EmitMetricEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenUrlInNewWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInNewWindow (9)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCandidates');
          const result = this.impl.requestCandidates(params.arg_query, params.arg_num_candidates);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_RequestCandidates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestCandidates FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadCandidate');
          const result = this.impl.downloadCandidate(params.arg_candidate_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_DownloadCandidate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DownloadCandidate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitAsInsert');
          const result = this.impl.commitAsInsert(params.arg_candidate_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsInsert_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitAsInsert FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitAsDownload');
          const result = this.impl.commitAsDownload(params.arg_candidate_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CommitAsDownload_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitAsDownload FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.previewFeedback');
          const result = this.impl.previewFeedback(params.arg_candidate_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_PreviewFeedback_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PreviewFeedback FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitFeedback');
          const result = this.impl.submitFeedback(params.arg_candidate_id, params.arg_description);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_SubmitFeedback_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubmitFeedback FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_EmitMetricEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.emitMetricEvent');
          const result = this.impl.emitMetricEvent(params.arg_metric_event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandler_OpenUrlInNewWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewWindow');
          const result = this.impl.openUrlInNewWindow(params.arg_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerReceiver = mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerReceiver;

mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerPtr = mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRemote;
mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerRequest = mojo.internal.bindings.lobster.mojom.UntrustedLobsterPageHandlerPendingReceiver;

