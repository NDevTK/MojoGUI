// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SmsStatus
blink.mojom.SmsStatus = {
  kSuccess: 0,
};

// Interface: WebOTPService
blink.mojom.WebOTPServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebOTPService';
  }

  receive() {
    // Method: Receive
    return new Promise((resolve) => {
      // Call: Receive()
      resolve({});
    });
  }

  abort() {
    // Method: Abort
    // Call: Abort()
  }

};

blink.mojom.WebOTPServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
