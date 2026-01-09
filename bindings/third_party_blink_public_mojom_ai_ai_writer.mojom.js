// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIWriterTone
blink.mojom.AIWriterTone = {
  kFormal: 0,
  kNeutral: 1,
  kCasual: 2,
};

// Enum: AIWriterFormat
blink.mojom.AIWriterFormat = {
  kPlainText: 0,
  kMarkdown: 1,
};

// Enum: AIWriterLength
blink.mojom.AIWriterLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};

// Struct: AIWriterCreateOptions
blink.mojom.AIWriterCreateOptions = class {
  constructor(values = {}) {
    this.output_language = values.output_language !== undefined ? values.output_language : "";
  }
};

// Interface: AIWriter
blink.mojom.AIWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIWriter';
  }

  write(input, context, pending_responder) {
    // Method: Write
    // Call: Write(input, context, pending_responder)
  }

  measureUsage(input, context) {
    // Method: MeasureUsage
    return new Promise((resolve) => {
      // Call: MeasureUsage(input, context)
      resolve({});
    });
  }

};

blink.mojom.AIWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
