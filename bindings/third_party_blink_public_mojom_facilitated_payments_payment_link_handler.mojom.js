// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};
var url = url || {};

payments.facilitated.mojom.PaymentLinkHandler = {};
payments.facilitated.mojom.PaymentLinkHandler.$interfaceName = 'payments.facilitated.mojom.PaymentLinkHandler';
payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec = { $: {} };

// Interface: PaymentLinkHandler
mojo.internal.Struct(
    payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec, 'payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.facilitated.mojom.PaymentLinkHandlerRemote = class {
  static get $interfaceName() {
    return 'payments.facilitated.mojom.PaymentLinkHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver,
      handle);
    this.$ = new payments.facilitated.mojom.PaymentLinkHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.facilitated.mojom.PaymentLinkHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handlePaymentLink(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec,
      null,
      [url],
      false);
  }

};

payments.facilitated.mojom.PaymentLinkHandler.getRemote = function() {
  let remote = new payments.facilitated.mojom.PaymentLinkHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'payments.facilitated.mojom.PaymentLinkHandler',
    'context');
  return remote.$;
};

payments.facilitated.mojom.PaymentLinkHandlerPtr = payments.facilitated.mojom.PaymentLinkHandlerRemote;
payments.facilitated.mojom.PaymentLinkHandlerRequest = payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver;

