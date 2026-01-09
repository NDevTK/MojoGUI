// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};


// Interface: PaymentAppInstance
chromeos.payments.mojom.PaymentAppInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.payments.mojom.PaymentAppInstance';
  }

  0(package_name) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(package_name)
      resolve({});
    });
  }

  query() {
    // Method: query
    // Call: query()
  }

  1(parameters) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(parameters)
      resolve({});
    });
  }

  createPayIntent() {
    // Method: createPayIntent
    // Call: createPayIntent()
  }

  createPayIntent() {
    // Method: createPayIntent
    // Call: createPayIntent()
  }

  createPayIntent() {
    // Method: createPayIntent
    // Call: createPayIntent()
  }

  2(parameters) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(parameters)
      resolve({});
    });
  }

  flow(|request_token|) {
    // Method: flow
    // Call: flow(|request_token|)
  }

  invokePaymentApp() {
    // Method: InvokePaymentApp
    // Call: InvokePaymentApp()
  }

  available(refreshed) {
    // Method: available
    // Call: available(refreshed)
  }

  3(request_token) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(request_token)
      resolve({});
    });
  }

};

chromeos.payments.mojom.PaymentAppInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
