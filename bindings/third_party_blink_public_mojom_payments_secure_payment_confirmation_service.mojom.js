// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/secure_payment_confirmation_service.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Enum: PaymentCredentialStorageStatus
payments.mojom.PaymentCredentialStorageStatus = {
  SUCCESS: 0,
  FAILED_TO_STORE_CREDENTIAL: 1,
};

// Enum: SecurePaymentConfirmationAvailabilityEnum
payments.mojom.SecurePaymentConfirmationAvailabilityEnum = {
};

// Interface: SecurePaymentConfirmationService
payments.mojom.SecurePaymentConfirmationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.SecurePaymentConfirmationService';
  }

  securePaymentConfirmationAvailability() {
    // Method: SecurePaymentConfirmationAvailability
    return new Promise((resolve) => {
      // Call: SecurePaymentConfirmationAvailability()
      resolve({});
    });
  }

  storePaymentCredential(credential_id, rp_id, user_id) {
    // Method: StorePaymentCredential
    return new Promise((resolve) => {
      // Call: StorePaymentCredential(credential_id, rp_id, user_id)
      resolve({});
    });
  }

  makePaymentCredential(options) {
    // Method: MakePaymentCredential
    return new Promise((resolve) => {
      // Call: MakePaymentCredential(options)
      resolve({});
    });
  }

};

payments.mojom.SecurePaymentConfirmationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
