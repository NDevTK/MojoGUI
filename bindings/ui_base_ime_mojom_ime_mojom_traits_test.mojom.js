// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_mojom_traits_test.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Interface: IMEStructTraitsTest
ui.mojom.IMEStructTraitsTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.mojom.IMEStructTraitsTest';
  }

  echoTextInputType(in) {
    // Method: EchoTextInputType
    return new Promise((resolve) => {
      // Call: EchoTextInputType(in)
      resolve({});
    });
  }

};

ui.mojom.IMEStructTraitsTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
