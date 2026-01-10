// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.facilitated.mojom = payments.facilitated.facilitated.mojom || {};
var url = url || {};


// Interface: PaymentLinkHandler
payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandler = {};

payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRemote = class {
  static get $interfaceName() {
    return 'payments.facilitated.mojom.PaymentLinkHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerPendingReceiver,
      handle);
    this.$ = new payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handlePaymentLink(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec,
      null,
      [url]);
  }

};

payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandler.getRemote = function() {
  let remote = new payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.facilitated.mojom.PaymentLinkHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandlePaymentLink
payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.facilitated.mojom.PaymentLinkHandler.HandlePaymentLink_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerPtr = payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRemote;
payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerRequest = payments.facilitated.facilitated.mojom.mojom.PaymentLinkHandlerPendingReceiver;

