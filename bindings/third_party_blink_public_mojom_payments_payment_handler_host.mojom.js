// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_handler_host.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Struct: PaymentHandlerMethodData
payments.mojom.PaymentHandlerMethodData = class {
  constructor(values = {}) {
    this.method_name = values.method_name !== undefined ? values.method_name : "";
    this.example: = values.example: !== undefined ? values.example: : null;
  }
};

// Struct: PaymentHandlerModifier
payments.mojom.PaymentHandlerModifier = class {
  constructor(values = {}) {
    this.method_data = values.method_data !== undefined ? values.method_data : null;
  }
};

// Struct: PaymentRequestDetailsUpdate
payments.mojom.PaymentRequestDetailsUpdate = class {
  constructor(values = {}) {
    this.shipping_address_errors = values.shipping_address_errors !== undefined ? values.shipping_address_errors : "";
  }
};

// Interface: PaymentHandlerHost
payments.mojom.PaymentHandlerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.PaymentHandlerHost';
  }

  onPaymentMethodChange() {
    // Method: OnPaymentMethodChange
    // Call: OnPaymentMethodChange()
  }

  onShippingAddressChange(address) {
    // Method: OnShippingAddressChange
    // Call: OnShippingAddressChange(address)
  }

  onShippingOptionChange(shipping_option_id) {
    // Method: OnShippingOptionChange
    // Call: OnShippingOptionChange(shipping_option_id)
  }

  updateWith() {
    // Method: UpdateWith
    // Call: UpdateWith()
  }

  onPaymentDetailsNotUpdated() {
    // Method: OnPaymentDetailsNotUpdated
    // Call: OnPaymentDetailsNotUpdated()
  }

  changePaymentMethod(method_data) {
    // Method: ChangePaymentMethod
    return new Promise((resolve) => {
      // Call: ChangePaymentMethod(method_data)
      resolve({});
    });
  }

  changeShippingOption(shipping_option_id) {
    // Method: ChangeShippingOption
    return new Promise((resolve) => {
      // Call: ChangeShippingOption(shipping_option_id)
      resolve({});
    });
  }

  changeShippingAddress(shipping_address) {
    // Method: ChangeShippingAddress
    return new Promise((resolve) => {
      // Call: ChangeShippingAddress(shipping_address)
      resolve({});
    });
  }

};

payments.mojom.PaymentHandlerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
