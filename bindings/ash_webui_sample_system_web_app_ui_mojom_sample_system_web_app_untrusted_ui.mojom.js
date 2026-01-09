// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_untrusted_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};


// Interface: UntrustedPageInterfacesFactory
ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
  }

  createParentPage(child_page, parent_page) {
    // Method: CreateParentPage
    // Call: CreateParentPage(child_page, parent_page)
  }

};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
