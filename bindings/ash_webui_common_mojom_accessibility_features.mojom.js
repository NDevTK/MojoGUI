// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accessibility_features.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: ForceHiddenElementsVisibleObserver
ash.common.mojom.ForceHiddenElementsVisibleObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.ForceHiddenElementsVisibleObserver';
  }

  onForceHiddenElementsVisibleChange(forceVisible) {
    // Method: OnForceHiddenElementsVisibleChange
    // Call: OnForceHiddenElementsVisibleChange(forceVisible)
  }

};

ash.common.mojom.ForceHiddenElementsVisibleObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessibilityFeatures
ash.common.mojom.AccessibilityFeaturesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.AccessibilityFeatures';
  }

  observeForceHiddenElementsVisible(observer) {
    // Method: ObserveForceHiddenElementsVisible
    return new Promise((resolve) => {
      // Call: ObserveForceHiddenElementsVisible(observer)
      resolve({});
    });
  }

};

ash.common.mojom.AccessibilityFeaturesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
