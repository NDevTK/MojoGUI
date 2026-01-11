// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_host.mojom
// Module: ash.ime.mojom

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
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var mojo_base = mojo_base || {};

ash.ime.mojom.CommitTextCursorBehaviorSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.CompositionSpanStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.InputMethodApiOperationSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.KoreanActionSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.HistogramBucketTypeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.UkmEntrySpec = { $: {} };
ash.ime.mojom.CompositionSpanSpec = { $: {} };
ash.ime.mojom.TextRangeSpec = { $: {} };
ash.ime.mojom.AutocorrectSpanSpec = { $: {} };
ash.ime.mojom.CompletionCandidateSpec = { $: {} };
ash.ime.mojom.SuggestionsRequestSpec = { $: {} };
ash.ime.mojom.SuggestionsResponseSpec = { $: {} };
ash.ime.mojom.SuggestionsTextContextSpec = { $: {} };
ash.ime.mojom.NonCompliantApiMetricSpec = { $: {} };
ash.ime.mojom.CandidateSpec = { $: {} };
ash.ime.mojom.HighlightedCandidateSpec = { $: {} };
ash.ime.mojom.CandidatesWindowSpec = { $: {} };
ash.ime.mojom.BucketedHistogramSpec = { $: {} };
ash.ime.mojom.InputMethodHost = {};
ash.ime.mojom.InputMethodHost.$interfaceName = 'ash.ime.mojom.InputMethodHost';
ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec = { $: {} };

// Enum: CommitTextCursorBehavior
ash.ime.mojom.CommitTextCursorBehavior = {
  kMoveCursorAfterText: 0,
  kMoveCursorBeforeText: 1,
};

// Enum: CompositionSpanStyle
ash.ime.mojom.CompositionSpanStyle = {
  kDefault: 0,
  kNone: 1,
  MinVersion: 1,
};

// Enum: InputMethodApiOperation
ash.ime.mojom.InputMethodApiOperation = {
  kUnknown: 0,
  kCommitText: 1,
  kSetCompositionText: 2,
  kDeleteSurroundingText: 3,
  MinVersion: 3,
};

// Enum: KoreanAction
ash.ime.mojom.KoreanAction = {
  kUnknown: 0,
  kHanjaKey: 1,
  kHangeulKey: 2,
  kComposeOutOfOrder: 3,
};

// Enum: HistogramBucketType
ash.ime.mojom.HistogramBucketType = {
  kExponential: 0,
  kLinear: 1,
};

// Union: UkmEntry
mojo.internal.Union(
    ash.ime.mojom.UkmEntrySpec, 'ash.ime.mojom.UkmEntry', {
      'non_compliant_api': {
        'ordinal': 0,
        'type': ash.ime.mojom.NonCompliantApiMetricSpec.$,
        'nullable': false,
      },
    });

// Struct: CompositionSpan
mojo.internal.Struct(
    ash.ime.mojom.CompositionSpanSpec, 'ash.ime.mojom.CompositionSpan', [
      mojo.internal.StructField('style', 0, 0, ash.ime.mojom.CompositionSpanStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextRange
mojo.internal.Struct(
    ash.ime.mojom.TextRangeSpec, 'ash.ime.mojom.TextRange', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AutocorrectSpan
mojo.internal.Struct(
    ash.ime.mojom.AutocorrectSpanSpec, 'ash.ime.mojom.AutocorrectSpan', [
      mojo.internal.StructField('autocorrect_range', 0, 0, ash.ime.mojom.TextRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_text', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CompletionCandidate
mojo.internal.Struct(
    ash.ime.mojom.CompletionCandidateSpec, 'ash.ime.mojom.CompletionCandidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('normalized_score', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SuggestionsRequest
mojo.internal.Struct(
    ash.ime.mojom.SuggestionsRequestSpec, 'ash.ime.mojom.SuggestionsRequest', [
      mojo.internal.StructField('mode', 0, 0, ash.ime.mojom.SuggestionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('completion_candidates', 16, 0, mojo.internal.Array(ash.ime.mojom.CompletionCandidateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SuggestionsResponse
mojo.internal.Struct(
    ash.ime.mojom.SuggestionsResponseSpec, 'ash.ime.mojom.SuggestionsResponse', [
      mojo.internal.StructField('candidates', 0, 0, mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SuggestionsTextContext
mojo.internal.Struct(
    ash.ime.mojom.SuggestionsTextContextSpec, 'ash.ime.mojom.SuggestionsTextContext', [
      mojo.internal.StructField('last_n_chars', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('surrounding_text_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NonCompliantApiMetric
mojo.internal.Struct(
    ash.ime.mojom.NonCompliantApiMetricSpec, 'ash.ime.mojom.NonCompliantApiMetric', [
      mojo.internal.StructField('non_compliant_operation', 0, 0, ash.ime.mojom.InputMethodApiOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Candidate
mojo.internal.Struct(
    ash.ime.mojom.CandidateSpec, 'ash.ime.mojom.Candidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('annotation', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HighlightedCandidate
mojo.internal.Struct(
    ash.ime.mojom.HighlightedCandidateSpec, 'ash.ime.mojom.HighlightedCandidate', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CandidatesWindow
mojo.internal.Struct(
    ash.ime.mojom.CandidatesWindowSpec, 'ash.ime.mojom.CandidatesWindow', [
      mojo.internal.StructField('candidates', 0, 0, mojo.internal.Array(ash.ime.mojom.CandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_highlighted_candidate', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('auxiliary_text', 16, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('highlighted_candidate', 24, 0, ash.ime.mojom.HighlightedCandidateSpec.$, null, true, 6, undefined),
    ],
    [[0, 24], [4, 32], [6, 40]]);

// Struct: BucketedHistogram
mojo.internal.Struct(
    ash.ime.mojom.BucketedHistogramSpec, 'ash.ime.mojom.BucketedHistogram', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bucket_type', 8, 0, ash.ime.mojom.HistogramBucketTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('maximum', 18, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('bucket_count', 20, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: InputMethodHost
mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec, 'ash.ime.mojom.InputMethodHost_CommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('cursor_behavior', 8, 0, ash.ime.mojom.CommitTextCursorBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('spans', 8, 0, mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec, 'ash.ime.mojom.InputMethodHost_SetComposition_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('spans', 8, 0, mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_position', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec, 'ash.ime.mojom.InputMethodHost_SetCompositionRange_Params', [
      mojo.internal.StructField('start_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec, 'ash.ime.mojom.InputMethodHost_FinishComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DeleteSurroundingText_Params', [
      mojo.internal.StructField('num_before_cursor', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_after_cursor', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec, 'ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('num_before_cursor', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_after_cursor', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec, 'ash.ime.mojom.InputMethodHost_HandleAutocorrect_Params', [
      mojo.internal.StructField('autocorrect_span', 0, 0, ash.ime.mojom.AutocorrectSpanSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DisplaySuggestions_Params', [
      mojo.internal.StructField('suggestions', 0, 0, mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, ash.ime.mojom.SuggestionsTextContextSpec.$, null, true, 10, undefined),
    ],
    [[0, 16], [10, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec, 'ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_Params', [
      mojo.internal.StructField('window', 0, 0, ash.ime.mojom.CandidatesWindowSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec, 'ash.ime.mojom.InputMethodHost_RequestSuggestions_Params', [
      mojo.internal.StructField('request', 0, 0, ash.ime.mojom.SuggestionsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec, 'ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.ime.mojom.SuggestionsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec, 'ash.ime.mojom.InputMethodHost_UpdateQuickSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.ime.mojom.InputMethodQuickSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec, 'ash.ime.mojom.InputMethodHost_RecordUkm_Params', [
      mojo.internal.StructField('entry', 0, 0, ash.ime.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_Params', [
      mojo.internal.StructField('action', 0, 0, ash.ime.mojom.KoreanActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.ime.mojom.KoreanSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_Params', [
      mojo.internal.StructField('mode', 0, 0, ash.ime.mojom.SuggestionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec, 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_Params', [
      mojo.internal.StructField('histogram', 0, 0, ash.ime.mojom.BucketedHistogramSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

ash.ime.mojom.InputMethodHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodHostRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethodHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodHostPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  commitText(text, cursor_behavior) {
    return this.$.commitText(text, cursor_behavior);
  }
  dEPRECATED_SetComposition(text, spans) {
    return this.$.dEPRECATED_SetComposition(text, spans);
  }
  setComposition(text, spans, new_cursor_position) {
    return this.$.setComposition(text, spans, new_cursor_position);
  }
  setCompositionRange(start_index, end_index) {
    return this.$.setCompositionRange(start_index, end_index);
  }
  finishComposition() {
    return this.$.finishComposition();
  }
  deleteSurroundingText(num_before_cursor, num_after_cursor) {
    return this.$.deleteSurroundingText(num_before_cursor, num_after_cursor);
  }
  replaceSurroundingText(num_before_cursor, num_after_cursor, text) {
    return this.$.replaceSurroundingText(num_before_cursor, num_after_cursor, text);
  }
  handleAutocorrect(autocorrect_span) {
    return this.$.handleAutocorrect(autocorrect_span);
  }
  displaySuggestions(suggestions, context) {
    return this.$.displaySuggestions(suggestions, context);
  }
  updateCandidatesWindow(window) {
    return this.$.updateCandidatesWindow(window);
  }
  requestSuggestions(request) {
    return this.$.requestSuggestions(request);
  }
  updateQuickSettings(settings) {
    return this.$.updateQuickSettings(settings);
  }
  recordUkm(entry) {
    return this.$.recordUkm(entry);
  }
  dEPRECATED_ReportKoreanAction(action) {
    return this.$.dEPRECATED_ReportKoreanAction(action);
  }
  dEPRECATED_ReportKoreanSettings(settings) {
    return this.$.dEPRECATED_ReportKoreanSettings(settings);
  }
  dEPRECATED_ReportSuggestionOpportunity(mode) {
    return this.$.dEPRECATED_ReportSuggestionOpportunity(mode);
  }
  dEPRECATED_ReportHistogramSample(histogram, value) {
    return this.$.dEPRECATED_ReportHistogramSample(histogram, value);
  }
};

ash.ime.mojom.InputMethodHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethodHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 12 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 16 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 9 },
      { explicit: 7 },
      { explicit: 13 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
    ]);
  }

  commitText(text, cursor_behavior) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec,
      null,
      [text, cursor_behavior],
      false);
  }

  dEPRECATED_SetComposition(text, spans) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec,
      null,
      [text, spans],
      false);
  }

  setComposition(text, spans, new_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec,
      null,
      [text, spans, new_cursor_position],
      false);
  }

  setCompositionRange(start_index, end_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec,
      null,
      [start_index, end_index],
      false);
  }

  finishComposition() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec,
      null,
      [],
      false);
  }

  deleteSurroundingText(num_before_cursor, num_after_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec,
      null,
      [num_before_cursor, num_after_cursor],
      false);
  }

  replaceSurroundingText(num_before_cursor, num_after_cursor, text) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec,
      null,
      [num_before_cursor, num_after_cursor, text],
      false);
  }

  handleAutocorrect(autocorrect_span) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec,
      null,
      [autocorrect_span],
      false);
  }

  displaySuggestions(suggestions, context) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec,
      null,
      [suggestions, context],
      false);
  }

  updateCandidatesWindow(window) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec,
      null,
      [window],
      false);
  }

  requestSuggestions(request) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec,
      ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec,
      [request],
      false);
  }

  updateQuickSettings(settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec,
      null,
      [settings],
      false);
  }

  recordUkm(entry) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec,
      null,
      [entry],
      false);
  }

  dEPRECATED_ReportKoreanAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec,
      null,
      [action],
      false);
  }

  dEPRECATED_ReportKoreanSettings(settings) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec,
      null,
      [settings],
      false);
  }

  dEPRECATED_ReportSuggestionOpportunity(mode) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec,
      null,
      [mode],
      false);
  }

  dEPRECATED_ReportHistogramSample(histogram, value) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec,
      null,
      [histogram, value],
      false);
  }

};

ash.ime.mojom.InputMethodHost.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethodHost',
    'context');
  return remote.$;
};

ash.ime.mojom.InputMethodHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethodHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 12 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 16 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 9 },
      { explicit: 7 },
      { explicit: 13 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
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
        
        // Try Method 0: CommitText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitText (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DEPRECATED_SetComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_SetComposition (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetComposition (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCompositionRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionRange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FinishComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishComposition (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeleteSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSurroundingText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReplaceSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceSurroundingText (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HandleAutocorrect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAutocorrect (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DisplaySuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplaySuggestions (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateCandidatesWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCandidatesWindow (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RequestSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSuggestions (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateQuickSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateQuickSettings (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RecordUkm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUkm (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: DEPRECATED_ReportKoreanAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ReportKoreanAction (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DEPRECATED_ReportKoreanSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ReportKoreanSettings (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DEPRECATED_ReportSuggestionOpportunity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ReportSuggestionOpportunity (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: DEPRECATED_ReportHistogramSample
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ReportHistogramSample (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitText');
          const result = this.impl.commitText(params.text, params.cursor_behavior);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_SetComposition');
          const result = this.impl.dEPRECATED_SetComposition(params.text, params.spans);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setComposition');
          const result = this.impl.setComposition(params.text, params.spans, params.new_cursor_position);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionRange');
          const result = this.impl.setCompositionRange(params.start_index, params.end_index);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finishComposition');
          const result = this.impl.finishComposition();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingText');
          const result = this.impl.deleteSurroundingText(params.num_before_cursor, params.num_after_cursor);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceSurroundingText');
          const result = this.impl.replaceSurroundingText(params.num_before_cursor, params.num_after_cursor, params.text);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAutocorrect');
          const result = this.impl.handleAutocorrect(params.autocorrect_span);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displaySuggestions');
          const result = this.impl.displaySuggestions(params.suggestions, params.context);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCandidatesWindow');
          const result = this.impl.updateCandidatesWindow(params.window);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSuggestions');
          const result = this.impl.requestSuggestions(params.request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestSuggestions FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateQuickSettings');
          const result = this.impl.updateQuickSettings(params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordUkm');
          const result = this.impl.recordUkm(params.entry);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ReportKoreanAction');
          const result = this.impl.dEPRECATED_ReportKoreanAction(params.action);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ReportKoreanSettings');
          const result = this.impl.dEPRECATED_ReportKoreanSettings(params.settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ReportSuggestionOpportunity');
          const result = this.impl.dEPRECATED_ReportSuggestionOpportunity(params.mode);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ReportHistogramSample');
          const result = this.impl.dEPRECATED_ReportHistogramSample(params.histogram, params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.ime.mojom.InputMethodHostReceiver = ash.ime.mojom.InputMethodHostReceiver;

ash.ime.mojom.InputMethodHostPtr = ash.ime.mojom.InputMethodHostRemote;
ash.ime.mojom.InputMethodHostRequest = ash.ime.mojom.InputMethodHostPendingReceiver;

