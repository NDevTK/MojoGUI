// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_host.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: CommitTextCursorBehavior
ash.ime.mojom.CommitTextCursorBehavior = {
  kMoveCursorBeforeText: 0,
};
ash.ime.mojom.CommitTextCursorBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: CompositionSpanStyle
ash.ime.mojom.CompositionSpanStyle = {
  kNone: 0,
};
ash.ime.mojom.CompositionSpanStyleSpec = { $: mojo.internal.Enum() };

// Enum: InputMethodApiOperation
ash.ime.mojom.InputMethodApiOperation = {
  kCommitText: 0,
  kSetCompositionText: 1,
  kDeleteSurroundingText: 2,
};
ash.ime.mojom.InputMethodApiOperationSpec = { $: mojo.internal.Enum() };

// Enum: KoreanAction
ash.ime.mojom.KoreanAction = {
  kHanjaKey: 0,
  kHangeulKey: 1,
  kComposeOutOfOrder: 2,
};
ash.ime.mojom.KoreanActionSpec = { $: mojo.internal.Enum() };

// Enum: HistogramBucketType
ash.ime.mojom.HistogramBucketType = {
  kLinear: 0,
};
ash.ime.mojom.HistogramBucketTypeSpec = { $: mojo.internal.Enum() };

// Union: UkmEntry
ash.ime.mojom.UkmEntrySpec = { $: mojo.internal.Union(
    'ash.ime.mojom.UkmEntry', {
      'non_compliant_api': {
        'ordinal': 0,
        'type': ash.ime.mojom.NonCompliantApiMetricSpec,
      }},
    })
};

// Struct: CompositionSpan
ash.ime.mojom.CompositionSpanSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CompositionSpan',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.CompositionSpanStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextRange
ash.ime.mojom.TextRangeSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.TextRange',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AutocorrectSpan
ash.ime.mojom.AutocorrectSpanSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.AutocorrectSpan',
      packedSize: 32,
      fields: [
        { name: 'autocorrect_range', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.TextRangeSpec, nullable: false, minVersion: 0 },
        { name: 'original_text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'current_text', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CompletionCandidate
ash.ime.mojom.CompletionCandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CompletionCandidate',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'normalized_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SuggestionsRequest
ash.ime.mojom.SuggestionsRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsRequest',
      packedSize: 32,
      fields: [
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: ash.ime.mojom.SuggestionModeSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'completion_candidates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CompletionCandidateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SuggestionsResponse
ash.ime.mojom.SuggestionsResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsResponse',
      packedSize: 16,
      fields: [
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SuggestionsTextContext
ash.ime.mojom.SuggestionsTextContextSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsTextContext',
      packedSize: 24,
      fields: [
        { name: 'last_n_chars', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'surrounding_text_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NonCompliantApiMetric
ash.ime.mojom.NonCompliantApiMetricSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.NonCompliantApiMetric',
      packedSize: 16,
      fields: [
        { name: 'non_compliant_operation', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputMethodApiOperationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Candidate
ash.ime.mojom.CandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.Candidate',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'annotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HighlightedCandidate
ash.ime.mojom.HighlightedCandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.HighlightedCandidate',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CandidatesWindow
ash.ime.mojom.CandidatesWindowSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CandidatesWindow',
      packedSize: 40,
      fields: [
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CandidateSpec, false), nullable: false, minVersion: 0 },
        { name: 'DEPRECATED_highlighted_candidate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'auxiliary_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 4 },
        { name: 'highlighted_candidate', packedOffset: 24, packedBitOffset: 0, type: ash.ime.mojom.HighlightedCandidateSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 4, packedSize: 32}, {version: 6, packedSize: 40}]
    }
  }
};

// Struct: BucketedHistogram
ash.ime.mojom.BucketedHistogramSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.BucketedHistogram',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bucket_type', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.HistogramBucketTypeSpec, nullable: false, minVersion: 0 },
        { name: 'minimum', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'maximum', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'bucket_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: InputMethodHost
ash.ime.mojom.InputMethodHost = {};

ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_CommitText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'cursor_behavior', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.CommitTextCursorBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_SetComposition_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec, false), nullable: false, minVersion: 0 },
        { name: 'new_cursor_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_SetCompositionRange_Params',
      packedSize: 16,
      fields: [
        { name: 'start_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_FinishComposition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DeleteSurroundingText_Params',
      packedSize: 16,
      fields: [
        { name: 'num_before_cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_after_cursor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_Params',
      packedSize: 24,
      fields: [
        { name: 'num_before_cursor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_after_cursor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_HandleAutocorrect_Params',
      packedSize: 16,
      fields: [
        { name: 'autocorrect_span', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.AutocorrectSpanSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DisplaySuggestions_Params',
      packedSize: 24,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec, false), nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.SuggestionsTextContextSpec, nullable: true, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 10, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.CandidatesWindowSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_RequestSuggestions_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_UpdateQuickSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputMethodQuickSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_RecordUkm_Params',
      packedSize: 24,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.UkmEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KoreanActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KoreanSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_Params',
      packedSize: 24,
      fields: [
        { name: 'histogram', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.BucketedHistogramSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
};

ash.ime.mojom.InputMethodHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitText(text, cursor_behavior) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec,
      null,
      [text, cursor_behavior]);
  }

  dEPRECATED_SetComposition(text, spans) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec,
      null,
      [text, spans]);
  }

  setComposition(text, spans, new_cursor_position) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec,
      null,
      [text, spans, new_cursor_position]);
  }

  setCompositionRange(start_index, end_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec,
      null,
      [start_index, end_index]);
  }

  finishComposition() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec,
      null,
      []);
  }

  deleteSurroundingText(num_before_cursor, num_after_cursor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec,
      null,
      [num_before_cursor, num_after_cursor]);
  }

  replaceSurroundingText(num_before_cursor, num_after_cursor, text) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec,
      null,
      [num_before_cursor, num_after_cursor, text]);
  }

  handleAutocorrect(autocorrect_span) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec,
      null,
      [autocorrect_span]);
  }

  displaySuggestions(suggestions, context) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec,
      null,
      [suggestions, context]);
  }

  updateCandidatesWindow(window) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec,
      null,
      [window]);
  }

  requestSuggestions(request) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec,
      ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec,
      [request]);
  }

  updateQuickSettings(settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec,
      null,
      [settings]);
  }

  recordUkm(entry) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec,
      null,
      [entry]);
  }

  dEPRECATED_ReportKoreanAction(action) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec,
      null,
      [action]);
  }

  dEPRECATED_ReportKoreanSettings(settings) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec,
      null,
      [settings]);
  }

  dEPRECATED_ReportSuggestionOpportunity(mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec,
      null,
      [mode]);
  }

  dEPRECATED_ReportHistogramSample(histogram, value) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec,
      null,
      [histogram, value]);
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

// ParamsSpec for CommitText
ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.CommitText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'cursor_behavior', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.CommitTextCursorBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_SetComposition
ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DEPRECATED_SetComposition_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetComposition
ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.SetComposition_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.CompositionSpanSpec, false), nullable: false, minVersion: 0 },
        { name: 'new_cursor_position', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetCompositionRange
ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.SetCompositionRange_Params',
      packedSize: 16,
      fields: [
        { name: 'start_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FinishComposition
ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.FinishComposition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeleteSurroundingText
ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DeleteSurroundingText_Params',
      packedSize: 16,
      fields: [
        { name: 'num_before_cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_after_cursor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReplaceSurroundingText
ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.ReplaceSurroundingText_Params',
      packedSize: 24,
      fields: [
        { name: 'num_before_cursor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_after_cursor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for HandleAutocorrect
ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.HandleAutocorrect_Params',
      packedSize: 16,
      fields: [
        { name: 'autocorrect_span', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.AutocorrectSpanSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplaySuggestions
ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DisplaySuggestions_Params',
      packedSize: 24,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec, false), nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.SuggestionsTextContextSpec, nullable: true, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 10, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateCandidatesWindow
ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.UpdateCandidatesWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.CandidatesWindowSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestSuggestions
ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.RequestSuggestions_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.RequestSuggestions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateQuickSettings
ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.UpdateQuickSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputMethodQuickSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordUkm
ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.RecordUkm_Params',
      packedSize: 24,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.UkmEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_ReportKoreanAction
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DEPRECATED_ReportKoreanAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KoreanActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_ReportKoreanSettings
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DEPRECATED_ReportKoreanSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KoreanSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_ReportSuggestionOpportunity
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DEPRECATED_ReportSuggestionOpportunity_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_ReportHistogramSample
ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodHost.DEPRECATED_ReportHistogramSample_Params',
      packedSize: 24,
      fields: [
        { name: 'histogram', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.BucketedHistogramSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.InputMethodHostPtr = ash.ime.mojom.InputMethodHostRemote;
ash.ime.mojom.InputMethodHostRequest = ash.ime.mojom.InputMethodHostPendingReceiver;

