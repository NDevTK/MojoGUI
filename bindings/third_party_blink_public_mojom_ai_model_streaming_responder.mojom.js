// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_streaming_responder.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ModelStreamingResponseStatus
blink.mojom.ModelStreamingResponseStatus = {
  and: 0,
};

// Struct: ModelExecutionContextInfo
blink.mojom.ModelExecutionContextInfo = class {
  constructor(values = {}) {
    this.current_tokens = values.current_tokens !== undefined ? values.current_tokens : 0;
  }
};

// Interface: ModelStreamingResponder
blink.mojom.ModelStreamingResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ModelStreamingResponder';
  }

  onCompletion(context_info) {
    // Method: OnCompletion
    // Call: OnCompletion(context_info)
  }

  onError(status, quota_error_info) {
    // Method: OnError
    // Call: OnError(status, quota_error_info)
  }

  onStreaming(text) {
    // Method: OnStreaming
    // Call: OnStreaming(text)
  }

  onQuotaOverflow() {
    // Method: OnQuotaOverflow
    // Call: OnQuotaOverflow()
  }

};

blink.mojom.ModelStreamingResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
