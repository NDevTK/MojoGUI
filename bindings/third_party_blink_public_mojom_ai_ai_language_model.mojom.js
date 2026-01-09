// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_language_model.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AILanguageModelPromptRole
blink.mojom.AILanguageModelPromptRole = {
};

// Enum: AILanguageModelPromptType
blink.mojom.AILanguageModelPromptType = {
};

// Struct: AILanguageModelSamplingParams
blink.mojom.AILanguageModelSamplingParams = class {
  constructor(values = {}) {
    this.temperature = values.temperature !== undefined ? values.temperature : 0;
  }
};

// Struct: AILanguageModelParams
blink.mojom.AILanguageModelParams = class {
  constructor(values = {}) {
    this.max_sampling_params = values.max_sampling_params !== undefined ? values.max_sampling_params : null;
  }
};

// Struct: AILanguageModelInstanceInfo
blink.mojom.AILanguageModelInstanceInfo = class {
  constructor(values = {}) {
    this.input_types = values.input_types !== undefined ? values.input_types : 0;
  }
};

// Struct: AILanguageModelExpected
blink.mojom.AILanguageModelExpected = class {
  constructor(values = {}) {
    this.languages = values.languages !== undefined ? values.languages : [];
  }
};

// Struct: AILanguageModelPrompt
blink.mojom.AILanguageModelPrompt = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: AILanguageModelCreateOptions
blink.mojom.AILanguageModelCreateOptions = class {
  constructor(values = {}) {
    this.expected_outputs = values.expected_outputs !== undefined ? values.expected_outputs : [];
  }
};

// Interface: AIManagerCreateLanguageModelClient
blink.mojom.AIManagerCreateLanguageModelClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManagerCreateLanguageModelClient';
  }

  onResult(language_model_remote, info) {
    // Method: OnResult
    // Call: OnResult(language_model_remote, info)
  }

  onError(error, quota_error_info) {
    // Method: OnError
    // Call: OnError(error, quota_error_info)
  }

};

blink.mojom.AIManagerCreateLanguageModelClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AILanguageModel
blink.mojom.AILanguageModelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AILanguageModel';
  }

  prompt(prompts, constraint, pending_responder) {
    // Method: Prompt
    // Call: Prompt(prompts, constraint, pending_responder)
  }

  append(prompts, client) {
    // Method: Append
    // Call: Append(prompts, client)
  }

  fork(client) {
    // Method: Fork
    // Call: Fork(client)
  }

  destroy() {
    // Method: Destroy
    // Call: Destroy()
  }

  measureInputUsage(input) {
    // Method: MeasureInputUsage
    return new Promise((resolve) => {
      // Call: MeasureInputUsage(input)
      resolve({});
    });
  }

};

blink.mojom.AILanguageModelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
