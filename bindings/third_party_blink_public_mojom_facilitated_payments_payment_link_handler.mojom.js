// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};


// Interface: PaymentLinkHandler
payments.facilitated.mojom.PaymentLinkHandler = {};

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
      null,
      [url],
      undefined,
      undefined
    );
  }

};

payments.facilitated.mojom.PaymentLinkHandler.getRemote = function() {
  let remote = new payments.facilitated.mojom.PaymentLinkHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.facilitated.mojom.PaymentLinkHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandlePaymentLink
payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.facilitated.mojom.PaymentLinkHandler.HandlePaymentLink_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.facilitated.mojom.PaymentLinkHandlerPtr = payments.facilitated.mojom.PaymentLinkHandlerRemote;
payments.facilitated.mojom.PaymentLinkHandlerRequest = payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver;

