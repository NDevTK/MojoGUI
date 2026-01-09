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
  infinity: 1,
  buckets: 2,
  infinity: 3,
};

// Struct: CompositionSpan
ash.ime.mojom.CompositionSpan = class {
  constructor(values = {}) {
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
  }
};

// Struct: CompletionCandidate
ash.ime.mojom.CompletionCandidate = class {
  constructor(values = {}) {
  }
};

// Struct: SuggestionsRequest
ash.ime.mojom.SuggestionsRequest = class {
  constructor(values = {}) {
  }
};

// Struct: SuggestionsResponse
ash.ime.mojom.SuggestionsResponse = class {
  constructor(values = {}) {
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
  }
};

// Struct: Candidate
ash.ime.mojom.Candidate = class {
  constructor(values = {}) {
  }
};

// Struct: HighlightedCandidate
ash.ime.mojom.HighlightedCandidate = class {
  constructor(values = {}) {
  }
};

// Struct: CandidatesWindow
ash.ime.mojom.CandidatesWindow = class {
  constructor(values = {}) {
  }
};

// Struct: BucketedHistogram
ash.ime.mojom.BucketedHistogram = class {
  constructor(values = {}) {
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
