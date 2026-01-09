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

// Enum: CompositionSpanStyle
ash.ime.mojom.CompositionSpanStyle = {
  this: 0,
  distinguishing: 1,
  this: 2,
};

// Enum: InputMethodApiOperation
ash.ime.mojom.InputMethodApiOperation = {
  kCommitText: 0,
  kSetCompositionText: 1,
  kDeleteSurroundingText: 2,
};

// Enum: KoreanAction
ash.ime.mojom.KoreanAction = {
};

// Enum: HistogramBucketType
ash.ime.mojom.HistogramBucketType = {
  buckets: 0,
  1: 1,
  2: 2,
  4: 3,
  8: 4,
  16: 5,
  32: 6,
  64: 7,
  infinity: 8,
  buckets: 9,
  5: 10,
  10: 11,
  infinity: 12,
};

// Struct: CompositionSpan
ash.ime.mojom.CompositionSpan = class {
  constructor(values = {}) {
    this.style@2 = values.style@2 !== undefined ? values.style@2 : 0;
  }
};

// Struct: TextRange
ash.ime.mojom.TextRange = class {
  constructor(values = {}) {
    this.end = values.end !== undefined ? values.end : 0;
  }
};

// Struct: AutocorrectSpan
ash.ime.mojom.AutocorrectSpan = class {
  constructor(values = {}) {
    this.original_text@1 = values.original_text@1 !== undefined ? values.original_text@1 : "";
    this.current_text@2 = values.current_text@2 !== undefined ? values.current_text@2 : "";
  }
};

// Struct: CompletionCandidate
ash.ime.mojom.CompletionCandidate = class {
  constructor(values = {}) {
    this.normalized_score@1 = values.normalized_score@1 !== undefined ? values.normalized_score@1 : 0;
  }
};

// Struct: SuggestionsRequest
ash.ime.mojom.SuggestionsRequest = class {
  constructor(values = {}) {
    this.completion_candidates@2 = values.completion_candidates@2 !== undefined ? values.completion_candidates@2 : "";
  }
};

// Struct: SuggestionsResponse
ash.ime.mojom.SuggestionsResponse = class {
  constructor(values = {}) {
    this.candidates@0 = values.candidates@0 !== undefined ? values.candidates@0 : [];
  }
};

// Struct: SuggestionsTextContext
ash.ime.mojom.SuggestionsTextContext = class {
  constructor(values = {}) {
    this.surrounding_text_length = values.surrounding_text_length !== undefined ? values.surrounding_text_length : 0;
  }
};

// Struct: NonCompliantApiMetric
ash.ime.mojom.NonCompliantApiMetric = class {
  constructor(values = {}) {
    this.non_compliant_operation@0 = values.non_compliant_operation@0 !== undefined ? values.non_compliant_operation@0 : null;
  }
};

// Struct: Candidate
ash.ime.mojom.Candidate = class {
  constructor(values = {}) {
    this.annotation@2 = values.annotation@2 !== undefined ? values.annotation@2 : "";
  }
};

// Struct: HighlightedCandidate
ash.ime.mojom.HighlightedCandidate = class {
  constructor(values = {}) {
    this.index@0 = values.index@0 !== undefined ? values.index@0 : 0;
  }
};

// Struct: CandidatesWindow
ash.ime.mojom.CandidatesWindow = class {
  constructor(values = {}) {
    this.DEPRECATED_highlighted_candidate@1 = values.DEPRECATED_highlighted_candidate@1 !== undefined ? values.DEPRECATED_highlighted_candidate@1 : 0;
    this.auxiliary_text@2 = values.auxiliary_text@2 !== undefined ? values.auxiliary_text@2 : "";
    this.highlighted_candidate@3 = values.highlighted_candidate@3 !== undefined ? values.highlighted_candidate@3 : null;
  }
};

// Struct: BucketedHistogram
ash.ime.mojom.BucketedHistogram = class {
  constructor(values = {}) {
    this.bucket_count@4 = values.bucket_count@4 !== undefined ? values.bucket_count@4 : 0;
  }
};

// Interface: InputMethodHost
ash.ime.mojom.InputMethodHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.InputMethodHost';
  }

};

ash.ime.mojom.InputMethodHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
