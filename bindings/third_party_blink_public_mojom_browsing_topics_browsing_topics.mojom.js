// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browsing_topics/browsing_topics.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EpochTopic
blink.mojom.EpochTopic = class {
  constructor(values = {}) {
    this.context = values.context !== undefined ? values.context : null;
    this.topic = values.topic !== undefined ? values.topic : 0;
    this.taxonomy_version = values.taxonomy_version !== undefined ? values.taxonomy_version : "";
  }
};

// Interface: BrowsingTopicsDocumentService
blink.mojom.BrowsingTopicsDocumentServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BrowsingTopicsDocumentService';
  }

  getBrowsingTopics(observe) {
    // Method: GetBrowsingTopics
    // Call: GetBrowsingTopics(observe)
  }

};

blink.mojom.BrowsingTopicsDocumentServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
