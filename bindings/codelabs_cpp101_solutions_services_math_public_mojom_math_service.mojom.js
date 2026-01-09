// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/cpp101/solutions/services/math/public/mojom/math_service.mojom
// Module: math.mojom

'use strict';

// Module namespace
var math = math || {};
math.mojom = math.mojom || {};


// Interface: MathService
math.mojom.MathServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'math.mojom.MathService';
  }

  divide(dividend, divisor) {
    // Method: Divide
    return new Promise((resolve) => {
      // Call: Divide(dividend, divisor)
      resolve({});
    });
  }

};

math.mojom.MathServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
