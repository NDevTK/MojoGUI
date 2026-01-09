// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_text.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: NodeLocationType
blink.mojom.NodeLocationType = {
  kStart: 0,
};

// Struct: InnerTextFrame
blink.mojom.InnerTextFrame = class {
  constructor(values = {}) {
    this.segments = values.segments !== undefined ? values.segments : [];
  }
};

// Struct: InnerTextParams
blink.mojom.InnerTextParams = class {
  constructor(values = {}) {
    this.node_id = values.node_id !== undefined ? values.node_id : 0;
    this.collecting = values.collecting !== undefined ? values.collecting : null;
    this.max_words_per_aggregate_passage = values.max_words_per_aggregate_passage !== undefined ? values.max_words_per_aggregate_passage : 0;
    this.collecting = values.collecting !== undefined ? values.collecting : null;
    this.under = values.under !== undefined ? values.under : 0;
    this.greedily_aggregate_sibling_nodes = values.greedily_aggregate_sibling_nodes !== undefined ? values.greedily_aggregate_sibling_nodes : false;
    this.extraction = values.extraction !== undefined ? values.extraction : null;
    this.max_passages = values.max_passages !== undefined ? values.max_passages : 0;
    this.min_words_per_passage = values.min_words_per_passage !== undefined ? values.min_words_per_passage : 0;
  }
};

// Interface: InnerTextAgent
blink.mojom.InnerTextAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.InnerTextAgent';
  }

  getInnerText(params) {
    // Method: GetInnerText
    return new Promise((resolve) => {
      // Call: GetInnerText(params)
      resolve({});
    });
  }

};

blink.mojom.InnerTextAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
