// Auto-generated MojoJS binding
// Source: chromium_src/fuchsia_web/webengine/mojom/web_engine_media_resource_provider.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Struct: AudioConsumerRequest
mojom.AudioConsumerRequest = class {
  constructor(values = {}) {
    this.request = values.request !== undefined ? values.request : null;
  }
};

// Interface: WebEngineMediaResourceProvider
mojom.WebEngineMediaResourceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.WebEngineMediaResourceProvider';
  }

  shouldUseAudioConsumer() {
    // Method: ShouldUseAudioConsumer
    return new Promise((resolve) => {
      // Call: ShouldUseAudioConsumer()
      resolve({});
    });
  }

  createAudioConsumer(request) {
    // Method: CreateAudioConsumer
    // Call: CreateAudioConsumer(request)
  }

};

mojom.WebEngineMediaResourceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
