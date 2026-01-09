// Auto-generated MojoJS binding
// Source: chromium_src/content/common/memory_coordinator/mojom/memory_consumer_traits_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MemoryConsumerTraitsTest
content.mojom.MemoryConsumerTraitsTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.MemoryConsumerTraitsTest';
  }

  echoMemoryConsumerTraits(in) {
    // Method: EchoMemoryConsumerTraits
    return new Promise((resolve) => {
      // Call: EchoMemoryConsumerTraits(in)
      resolve({});
    });
  }

};

content.mojom.MemoryConsumerTraitsTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
