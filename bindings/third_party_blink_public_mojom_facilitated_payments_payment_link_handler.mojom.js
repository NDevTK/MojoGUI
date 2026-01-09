// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};


// Interface: PaymentLinkHandler
payments.facilitated.mojom.PaymentLinkHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.facilitated.mojom.PaymentLinkHandler';
  }

  handlePaymentLink(url) {
    // Method: HandlePaymentLink
    // Call: HandlePaymentLink(url)
  }

};

payments.facilitated.mojom.PaymentLinkHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
