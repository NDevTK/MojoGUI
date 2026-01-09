// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/foo/foo.mojom
// Module: foo.mojom

'use strict';

// Module namespace
var foo = foo || {};
foo.mojom = foo.mojom || {};


// Struct: FooDataItem
foo.mojom.FooDataItem = class {
  constructor(values = {}) {
    this.imageUrl = values.imageUrl !== undefined ? values.imageUrl : "";
  }
};

// Interface: FooHandler
foo.mojom.FooHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'foo.mojom.FooHandler';
  }

  getData() {
    // Method: GetData
    return new Promise((resolve) => {
      // Call: GetData()
      resolve({});
    });
  }

};

foo.mojom.FooHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
