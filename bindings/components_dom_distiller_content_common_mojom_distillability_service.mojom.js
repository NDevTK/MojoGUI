// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distillability_service.mojom
// Module: dom_distiller.mojom

'use strict';

// Module namespace
var dom_distiller = dom_distiller || {};
dom_distiller.mojom = dom_distiller.mojom || {};


// Interface: DistillabilityService
dom_distiller.mojom.DistillabilityServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'dom_distiller.mojom.DistillabilityService';
  }

  notifyIsDistillable(page_is_distillable, is_last_update, is_long_article, is_mobile_friendly) {
    // Method: NotifyIsDistillable
    // Call: NotifyIsDistillable(page_is_distillable, is_last_update, is_long_article, is_mobile_friendly)
  }

};

dom_distiller.mojom.DistillabilityServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
