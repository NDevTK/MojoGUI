// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_variations_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RendererVariationsConfiguration
content.mojom.RendererVariationsConfigurationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.RendererVariationsConfiguration';
  }

  setVariationsHeaders(variations_headers) {
    // Method: SetVariationsHeaders
    // Call: SetVariationsHeaders(variations_headers)
  }

  setFieldTrialGroup(trial_name, group_name) {
    // Method: SetFieldTrialGroup
    // Call: SetFieldTrialGroup(trial_name, group_name)
  }

};

content.mojom.RendererVariationsConfigurationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
