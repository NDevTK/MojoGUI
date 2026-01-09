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
  }
};

// Struct: TextSuggesterQuery
chromeos.machine_learning.mojom.TextSuggesterQuery = class {
  constructor(values = {}) {
  }
};

// Struct: MultiWordSuggestionCandidate
chromeos.machine_learning.mojom.MultiWordSuggestionCandidate = class {
  constructor(values = {}) {
  }
};

// Struct: TextSuggesterResult
chromeos.machine_learning.mojom.TextSuggesterResult = class {
  constructor(values = {}) {
  }
};

// Struct: TextSuggesterSpec
chromeos.machine_learning.mojom.TextSuggesterSpec = class {
  constructor(values = {}) {
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
