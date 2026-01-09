// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_manager.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Struct: Feature
chromecast.shell.mojom.Feature = class {
  constructor(values = {}) {
    this.config = values.config !== undefined ? values.config : "";
  }
};

// Interface: FeatureManager
chromecast.shell.mojom.FeatureManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.shell.mojom.FeatureManager';
  }

  configureFeatures(features) {
    // Method: ConfigureFeatures
    // Call: ConfigureFeatures(features)
  }

};

chromecast.shell.mojom.FeatureManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
