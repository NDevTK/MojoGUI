// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ModelAvailabilityCheckResult
blink.mojom.ModelAvailabilityCheckResult = {
};

// Interface: AIManagerCreateWriterClient
blink.mojom.AIManagerCreateWriterClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManagerCreateWriterClient';
  }

  onResult(writer) {
    // Method: OnResult
    // Call: OnResult(writer)
  }

  onError(error, quota_error_info) {
    // Method: OnError
    // Call: OnError(error, quota_error_info)
  }

};

blink.mojom.AIManagerCreateWriterClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AIManagerCreateRewriterClient
blink.mojom.AIManagerCreateRewriterClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManagerCreateRewriterClient';
  }

  onResult(rewriter) {
    // Method: OnResult
    // Call: OnResult(rewriter)
  }

  onError(error, quota_error_info) {
    // Method: OnError
    // Call: OnError(error, quota_error_info)
  }

};

blink.mojom.AIManagerCreateRewriterClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AIManagerCreateSummarizerClient
blink.mojom.AIManagerCreateSummarizerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManagerCreateSummarizerClient';
  }

  onResult(summarizer) {
    // Method: OnResult
    // Call: OnResult(summarizer)
  }

  onError(error, quota_error_info) {
    // Method: OnError
    // Call: OnError(error, quota_error_info)
  }

};

blink.mojom.AIManagerCreateSummarizerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AIManagerCreateProofreaderClient
blink.mojom.AIManagerCreateProofreaderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManagerCreateProofreaderClient';
  }

  onResult(proofreader) {
    // Method: OnResult
    // Call: OnResult(proofreader)
  }

  onError(error, quota_error_info) {
    // Method: OnError
    // Call: OnError(error, quota_error_info)
  }

};

blink.mojom.AIManagerCreateProofreaderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AIManager
blink.mojom.AIManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AIManager';
  }

  canCreateLanguageModel(options) {
    // Method: CanCreateLanguageModel
    return new Promise((resolve) => {
      // Call: CanCreateLanguageModel(options)
      resolve({});
    });
  }

  createLanguageModel(client, options) {
    // Method: CreateLanguageModel
    // Call: CreateLanguageModel(client, options)
  }

  canCreateSummarizer(options) {
    // Method: CanCreateSummarizer
    return new Promise((resolve) => {
      // Call: CanCreateSummarizer(options)
      resolve({});
    });
  }

  createSummarizer(client, options) {
    // Method: CreateSummarizer
    // Call: CreateSummarizer(client, options)
  }

  getLanguageModelParams() {
    // Method: GetLanguageModelParams
    return new Promise((resolve) => {
      // Call: GetLanguageModelParams()
      resolve({});
    });
  }

  canCreateWriter(options) {
    // Method: CanCreateWriter
    return new Promise((resolve) => {
      // Call: CanCreateWriter(options)
      resolve({});
    });
  }

  createWriter(client, options) {
    // Method: CreateWriter
    // Call: CreateWriter(client, options)
  }

  canCreateRewriter(options) {
    // Method: CanCreateRewriter
    return new Promise((resolve) => {
      // Call: CanCreateRewriter(options)
      resolve({});
    });
  }

  createRewriter(client, options) {
    // Method: CreateRewriter
    // Call: CreateRewriter(client, options)
  }

  canCreateProofreader(options) {
    // Method: CanCreateProofreader
    return new Promise((resolve) => {
      // Call: CanCreateProofreader(options)
      resolve({});
    });
  }

  createProofreader(client, options) {
    // Method: CreateProofreader
    // Call: CreateProofreader(client, options)
  }

  addModelDownloadProgressObserver(observer_remote) {
    // Method: AddModelDownloadProgressObserver
    // Call: AddModelDownloadProgressObserver(observer_remote)
  }

};

blink.mojom.AIManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
