// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

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
  handlePaymentLink(url) {
    return this.$.handlePaymentLink(url);
  }
};

payments.facilitated.mojom.PaymentLinkHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentLinkHandler', [
      { explicit: null },
    ]);
  }

  handlePaymentLink(url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec,
      null,
      [url],
      false);
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

payments.facilitated.mojom.PaymentLinkHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentLinkHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec.$.structSpec);
          const result = this.impl.handlePaymentLink(params.url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

payments.facilitated.mojom.PaymentLinkHandlerReceiver = payments.facilitated.mojom.PaymentLinkHandlerReceiver;

payments.facilitated.mojom.PaymentLinkHandlerPtr = payments.facilitated.mojom.PaymentLinkHandlerRemote;
payments.facilitated.mojom.PaymentLinkHandlerRequest = payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver;

