// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_shared_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};


// Interface: ChildUntrustedPage
ash.mojom.sample_swa.ChildUntrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.ChildUntrustedPage';
  }

  embedding() {
    // Method: embedding
    // Call: embedding()
  }

  doSomethingForParent(task) {
    // Method: DoSomethingForParent
    // Call: DoSomethingForParent(task)
  }

};

ash.mojom.sample_swa.ChildUntrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ParentTrustedPage
ash.mojom.sample_swa.ParentTrustedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.sample_swa.ParentTrustedPage';
  }

  doSomethingForChild(task) {
    // Method: DoSomethingForChild
    return new Promise((resolve) => {
      // Call: DoSomethingForChild(task)
      resolve({});
    });
  }

};

ash.mojom.sample_swa.ParentTrustedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
