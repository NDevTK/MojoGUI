// Auto-generated MojoJS binding
// Source: chromium_src/components/autofill/core/browser/ml_model/logging/autofill_ml_internals.mojom
// Module: autofill_ml_internals.mojom

'use strict';

// Module namespace
var autofill_ml_internals = autofill_ml_internals || {};
autofill_ml_internals.mojom = autofill_ml_internals.mojom || {};


// Enum: OptimizationTarget
autofill_ml_internals.mojom.OptimizationTarget = {
};

// Struct: SelectOption
autofill_ml_internals.mojom.SelectOption = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
  }
};

// Struct: MlFieldPredictionLog
autofill_ml_internals.mojom.MlFieldPredictionLog = class {
  constructor(values = {}) {
    this.tokenized_field_representation = values.tokenized_field_representation !== undefined ? values.tokenized_field_representation : 0;
  }
};

// Struct: MlPredictionLog
autofill_ml_internals.mojom.MlPredictionLog = class {
  constructor(values = {}) {
    this.optimization_target = values.optimization_target !== undefined ? values.optimization_target : "";
  }
};

// Interface: Page
autofill_ml_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill_ml_internals.mojom.Page';
  }

  onLogAdded(log) {
    // Method: OnLogAdded
    // Call: OnLogAdded(log)
  }

};

autofill_ml_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
autofill_ml_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'autofill_ml_internals.mojom.PageHandler';
  }

  setPage(page) {
    // Method: SetPage
    // Call: SetPage(page)
  }

};

autofill_ml_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
