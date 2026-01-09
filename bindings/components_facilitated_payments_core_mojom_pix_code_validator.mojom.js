// Auto-generated MojoJS binding
// Source: chromium_src/components/facilitated_payments/core/mojom/pix_code_validator.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};


// Enum: PixQrCodeType
payments.facilitated.mojom.PixQrCodeType = {
};

// Interface: PixCodeValidator
payments.facilitated.mojom.PixCodeValidatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.facilitated.mojom.PixCodeValidator';
  }

  validatePixCode(input_text) {
    // Method: ValidatePixCode
    return new Promise((resolve) => {
      // Call: ValidatePixCode(input_text)
      resolve({});
    });
  }

};

payments.facilitated.mojom.PixCodeValidatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
