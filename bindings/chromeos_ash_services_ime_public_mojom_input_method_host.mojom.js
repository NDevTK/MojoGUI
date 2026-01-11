// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_host.mojom
// Module: ash.ime.mojom

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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_CommitText_ParamsSpec.$.structSpec);
          const result = this.impl.commitText(params.text, params.cursor_behavior);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_SetComposition_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_SetComposition(params.text, params.spans);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetComposition_ParamsSpec.$.structSpec);
          const result = this.impl.setComposition(params.text, params.spans, params.new_cursor_position);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_SetCompositionRange_ParamsSpec.$.structSpec);
          const result = this.impl.setCompositionRange(params.start_index, params.end_index);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_FinishComposition_ParamsSpec.$.structSpec);
          const result = this.impl.finishComposition();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DeleteSurroundingText_ParamsSpec.$.structSpec);
          const result = this.impl.deleteSurroundingText(params.num_before_cursor, params.num_after_cursor);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_ReplaceSurroundingText_ParamsSpec.$.structSpec);
          const result = this.impl.replaceSurroundingText(params.num_before_cursor, params.num_after_cursor, params.text);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_HandleAutocorrect_ParamsSpec.$.structSpec);
          const result = this.impl.handleAutocorrect(params.autocorrect_span);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DisplaySuggestions_ParamsSpec.$.structSpec);
          const result = this.impl.displaySuggestions(params.suggestions, params.context);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateCandidatesWindow_ParamsSpec.$.structSpec);
          const result = this.impl.updateCandidatesWindow(params.window);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RequestSuggestions_ParamsSpec.$.structSpec);
          const result = this.impl.requestSuggestions(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodHost_RequestSuggestions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_UpdateQuickSettings_ParamsSpec.$.structSpec);
          const result = this.impl.updateQuickSettings(params.settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_RecordUkm_ParamsSpec.$.structSpec);
          const result = this.impl.recordUkm(params.entry);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanAction_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_ReportKoreanAction(params.action);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportKoreanSettings_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_ReportKoreanSettings(params.settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportSuggestionOpportunity_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_ReportSuggestionOpportunity(params.mode);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodHost_DEPRECATED_ReportHistogramSample_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_ReportHistogramSample(params.histogram, params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.ime.mojom.InputMethodHostReceiver = ash.ime.mojom.InputMethodHostReceiver;

ash.ime.mojom.InputMethodHostPtr = ash.ime.mojom.InputMethodHostRemote;
ash.ime.mojom.InputMethodHostRequest = ash.ime.mojom.InputMethodHostPendingReceiver;

