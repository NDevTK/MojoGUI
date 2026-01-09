// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_coordinator.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: MemoryConsumerTraits
content.mojom.MemoryConsumerTraits = class {
  constructor(values = {}) {
    this.garbage_collects_v8_heap = values.garbage_collects_v8_heap !== undefined ? values.garbage_collects_v8_heap : 0;
  }
};

// Interface: ChildMemoryConsumer
content.mojom.ChildMemoryConsumerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.ChildMemoryConsumer';
  }

  notifyReleaseMemory() {
    // Method: NotifyReleaseMemory
    // Call: NotifyReleaseMemory()
  }

  notifyUpdateMemoryLimit(percentage) {
    // Method: NotifyUpdateMemoryLimit
    // Call: NotifyUpdateMemoryLimit(percentage)
  }

};

content.mojom.ChildMemoryConsumerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BrowserMemoryConsumerRegistry
content.mojom.BrowserMemoryConsumerRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.BrowserMemoryConsumerRegistry';
  }

  registerChildMemoryConsumer(consumer_id, traits, child_consumer) {
    // Method: RegisterChildMemoryConsumer
    // Call: RegisterChildMemoryConsumer(consumer_id, traits, child_consumer)
  }

};

content.mojom.BrowserMemoryConsumerRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
