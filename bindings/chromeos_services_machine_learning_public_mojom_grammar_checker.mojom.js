// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/grammar_checker.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  candidates: 0,
};

// Struct: GrammarCheckerQuery
chromeos.machine_learning.mojom.GrammarCheckerQuery = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
    this.language = values.language !== undefined ? values.language : "";
  }
};

// Struct: GrammarCorrectionFragment
chromeos.machine_learning.mojom.GrammarCorrectionFragment = class {
  constructor(values = {}) {
    this.replacement = values.replacement !== undefined ? values.replacement : 0;
  }
};

// Struct: GrammarCheckerCandidate
chromeos.machine_learning.mojom.GrammarCheckerCandidate = class {
  constructor(values = {}) {
    this.fragments = values.fragments !== undefined ? values.fragments : 0;
  }
};

// Struct: GrammarCheckerResult
chromeos.machine_learning.mojom.GrammarCheckerResult = class {
  constructor(values = {}) {
  }
};

// Interface: GrammarChecker
chromeos.machine_learning.mojom.GrammarCheckerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.GrammarChecker';
  }

};

chromeos.machine_learning.mojom.GrammarCheckerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
