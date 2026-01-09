// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distiller_javascript_service.mojom
// Module: dom_distiller.mojom

'use strict';

// Module namespace
var dom_distiller = dom_distiller || {};
dom_distiller.mojom = dom_distiller.mojom || {};


// Interface: DistillerJavaScriptService
dom_distiller.mojom.DistillerJavaScriptServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'dom_distiller.mojom.DistillerJavaScriptService';
  }

  handleDistillerOpenSettingsCall() {
    // Method: HandleDistillerOpenSettingsCall
    // Call: HandleDistillerOpenSettingsCall()
  }

  handleStoreThemePref(theme) {
    // Method: HandleStoreThemePref
    // Call: HandleStoreThemePref(theme)
  }

  handleStoreFontFamilyPref(font_family) {
    // Method: HandleStoreFontFamilyPref
    // Call: HandleStoreFontFamilyPref(font_family)
  }

  handleStoreFontScalingPref(font_scale) {
    // Method: HandleStoreFontScalingPref
    // Call: HandleStoreFontScalingPref(font_scale)
  }

};

dom_distiller.mojom.DistillerJavaScriptServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
