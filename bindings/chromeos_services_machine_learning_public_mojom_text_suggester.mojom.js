// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_suggester.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: TextSuggestionMode
chromeos.machine_learning.mojom.TextSuggestionMode = {
  and: 0,
  however: 1,
  and: 2,
};

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  no: 0,
};

// Enum: MultiWordExperimentGroup
chromeos.machine_learning.mojom.MultiWordExperimentGroup = {
  kGboard: 0,
};

// Struct: NextWordCompletionCandidate
chromeos.machine_learning.mojom.NextWordCompletionCandidate = class {
  constructor(values = {}) {
    this.normalized_score@1 = values.normalized_score@1 !== undefined ? values.normalized_score@1 : 0;
  }
};

// Struct: TextSuggesterQuery
chromeos.machine_learning.mojom.TextSuggesterQuery = class {
  constructor(values = {}) {
    this.suggestion_mode@2 = values.suggestion_mode@2 !== undefined ? values.suggestion_mode@2 : "";
  }
};

// Struct: MultiWordSuggestionCandidate
chromeos.machine_learning.mojom.MultiWordSuggestionCandidate = class {
  constructor(values = {}) {
    this.normalized_score@1 = values.normalized_score@1 !== undefined ? values.normalized_score@1 : 0;
  }
};

// Struct: TextSuggesterResult
chromeos.machine_learning.mojom.TextSuggesterResult = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
  }
};

// Struct: TextSuggesterSpec
chromeos.machine_learning.mojom.TextSuggesterSpec = class {
  constructor(values = {}) {
    this.multi_word_experiment@0 = values.multi_word_experiment@0 !== undefined ? values.multi_word_experiment@0 : null;
  }
};

// Interface: TextSuggester
chromeos.machine_learning.mojom.TextSuggesterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.TextSuggester';
  }

};

chromeos.machine_learning.mojom.TextSuggesterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
