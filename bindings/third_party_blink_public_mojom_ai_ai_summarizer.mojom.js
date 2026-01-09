// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_summarizer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AISummarizerType
blink.mojom.AISummarizerType = {
};

// Enum: AISummarizerFormat
blink.mojom.AISummarizerFormat = {
};

// Enum: AISummarizerLength
blink.mojom.AISummarizerLength = {
};

// Struct: AISummarizerCreateOptions
blink.mojom.AISummarizerCreateOptions = class {
  constructor(values = {}) {
    this.output_language = values.output_language !== undefined ? values.output_language : "";
  }
};

// Interface: AISummarizer
blink.mojom.AISummarizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AISummarizer';
  }

  summarize(input, context, pending_responder) {
    // Method: Summarize
    // Call: Summarize(input, context, pending_responder)
  }

  measureUsage(input, context) {
    // Method: MeasureUsage
    return new Promise((resolve) => {
      // Call: MeasureUsage(input, context)
      resolve({});
    });
  }

};

blink.mojom.AISummarizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
