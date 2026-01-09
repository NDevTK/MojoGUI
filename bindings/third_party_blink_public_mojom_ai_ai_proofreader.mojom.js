// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: AIProofreaderCreateOptions
blink.mojom.AIProofreaderCreateOptions = class {
  constructor(values = {}) {
    this.expected_input_languages = values.expected_input_languages !== undefined ? values.expected_input_languages : false;
  }
};

// Interface: AIProofreader
blink.mojom.AIProofreaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIProofreader';
  }

  proofread(input, pending_responder) {
    // Method: Proofread
    // Call: Proofread(input, pending_responder)
  }

  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    // Method: GetCorrectionType
    // Call: GetCorrectionType(input, corrected_input, correction_instruction, pending_responder)
  }

};

blink.mojom.AIProofreaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
