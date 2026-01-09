// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/content/mojom/page_text_service.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};


// Enum: TextDumpEvent
optimization_guide.mojom.TextDumpEvent = {
};

// Struct: PageTextDumpRequest
optimization_guide.mojom.PageTextDumpRequest = class {
  constructor(values = {}) {
    this.event = values.event !== undefined ? values.event : 0;
  }
};

// Interface: PageTextConsumer
optimization_guide.mojom.PageTextConsumerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide.mojom.PageTextConsumer';
  }

  onTextDumpChunk(chunk) {
    // Method: OnTextDumpChunk
    // Call: OnTextDumpChunk(chunk)
  }

  onChunksEnd() {
    // Method: OnChunksEnd
    // Call: OnChunksEnd()
  }

};

optimization_guide.mojom.PageTextConsumerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageTextService
optimization_guide.mojom.PageTextServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide.mojom.PageTextService';
  }

  requestPageTextDump(request, consumer) {
    // Method: RequestPageTextDump
    // Call: RequestPageTextDump(request, consumer)
  }

};

optimization_guide.mojom.PageTextServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
