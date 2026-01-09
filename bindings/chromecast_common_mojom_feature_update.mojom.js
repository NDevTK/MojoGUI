// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: FeatureUpdateObserver
chromecast.mojom.FeatureUpdateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.FeatureUpdateObserver';
  }

  disk(PrefService) {
    // Method: disk
    // Call: disk(PrefService)
  }

  onFeaturesUpdated(features) {
    // Method: OnFeaturesUpdated
    // Call: OnFeaturesUpdated(features)
  }

};

chromecast.mojom.FeatureUpdateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FeatureUpdateService
chromecast.mojom.FeatureUpdateServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.FeatureUpdateService';
  }

  registerFeatureUpdateObserver(observer) {
    // Method: RegisterFeatureUpdateObserver
    // Call: RegisterFeatureUpdateObserver(observer)
  }

};

chromecast.mojom.FeatureUpdateServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
