// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_rewriter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIRewriterTone
blink.mojom.AIRewriterTone = {
  kAsIs: 0,
  kMoreFormal: 1,
  kMoreCasual: 2,
};

// Enum: AIRewriterFormat
blink.mojom.AIRewriterFormat = {
  kAsIs: 0,
  kPlainText: 1,
  kMarkdown: 2,
};

// Enum: AIRewriterLength
blink.mojom.AIRewriterLength = {
  kAsIs: 0,
  kShorter: 1,
  kLonger: 2,
};

// Struct: AIRewriterCreateOptions
blink.mojom.AIRewriterCreateOptions = class {
  constructor(values = {}) {
    this.output_language = values.output_language !== undefined ? values.output_language : "";
  }
};

// Interface: AIRewriter
blink.mojom.AIRewriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIRewriter';
  }

  rewrite() {
    // Method: rewrite
    // Call: rewrite()
  }

  rewrite() {
    // Method: rewrite
    // Call: rewrite()
  }

  rewrite(input, context, pending_responder) {
    // Method: Rewrite
    // Call: Rewrite(input, context, pending_responder)
  }

  measureUsage(input, context) {
    // Method: MeasureUsage
    return new Promise((resolve) => {
      // Call: MeasureUsage(input, context)
      resolve({});
    });
  }

};

blink.mojom.AIRewriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
