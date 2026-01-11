// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_handler_host.mojom
// Module: payments.mojom

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};

payments.mojom.PaymentHandlerMethodDataSpec = { $: {} };
payments.mojom.PaymentHandlerModifierSpec = { $: {} };
payments.mojom.PaymentRequestDetailsUpdateSpec = { $: {} };
payments.mojom.PaymentHandlerHost = {};
payments.mojom.PaymentHandlerHost.$interfaceName = 'payments.mojom.PaymentHandlerHost';
payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec = { $: {} };
payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec = { $: {} };
payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec = { $: {} };
payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec = { $: {} };

// Struct: PaymentHandlerMethodData
mojo.internal.Struct(
    payments.mojom.PaymentHandlerMethodDataSpec, 'payments.mojom.PaymentHandlerMethodData', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_data', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentHandlerModifier
mojo.internal.Struct(
    payments.mojom.PaymentHandlerModifierSpec, 'payments.mojom.PaymentHandlerModifier', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('method_data', 8, 0, payments.mojom.PaymentHandlerMethodDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentRequestDetailsUpdate
mojo.internal.Struct(
    payments.mojom.PaymentRequestDetailsUpdateSpec, 'payments.mojom.PaymentRequestDetailsUpdate', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shipping_options', 8, 0, mojo.internal.Array(payments.mojom.PaymentShippingOptionSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('modifiers', 16, 0, mojo.internal.Array(payments.mojom.PaymentHandlerModifierSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('error', 24, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('stringified_payment_method_errors', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('shipping_address_errors', 40, 0, payments.mojom.AddressErrorsSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PaymentHandlerHost
mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangePaymentMethod_Params', [
      mojo.internal.StructField('method_data', 0, 0, payments.mojom.PaymentHandlerMethodDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, payments.mojom.PaymentRequestDetailsUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangeShippingOption_Params', [
      mojo.internal.StructField('shipping_option_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, payments.mojom.PaymentRequestDetailsUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangeShippingAddress_Params', [
      mojo.internal.StructField('shipping_address', 0, 0, payments.mojom.PaymentAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec, 'payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, payments.mojom.PaymentRequestDetailsUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

payments.mojom.PaymentHandlerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentHandlerHostRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentHandlerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentHandlerHostPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentHandlerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  changePaymentMethod(method_data) {
    return this.$.changePaymentMethod(method_data);
  }
  changeShippingOption(shipping_option_id) {
    return this.$.changeShippingOption(shipping_option_id);
  }
  changeShippingAddress(shipping_address) {
    return this.$.changeShippingAddress(shipping_address);
  }
};

payments.mojom.PaymentHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentHandlerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  changePaymentMethod(method_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec,
      [method_data],
      false);
  }

  changeShippingOption(shipping_option_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec,
      [shipping_option_id],
      false);
  }

  changeShippingAddress(shipping_address) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec,
      [shipping_address],
      false);
  }

};

payments.mojom.PaymentHandlerHost.getRemote = function() {
  let remote = new payments.mojom.PaymentHandlerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentHandlerHost',
    'context');
  return remote.$;
};

payments.mojom.PaymentHandlerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentHandlerHost', [
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec.$.structSpec);
          const result = this.impl.changePaymentMethod(params.method_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec.$.structSpec);
          const result = this.impl.changeShippingOption(params.shipping_option_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec.$.structSpec);
          const result = this.impl.changeShippingAddress(params.shipping_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

payments.mojom.PaymentHandlerHostReceiver = payments.mojom.PaymentHandlerHostReceiver;

payments.mojom.PaymentHandlerHostPtr = payments.mojom.PaymentHandlerHostRemote;
payments.mojom.PaymentHandlerHostRequest = payments.mojom.PaymentHandlerHostPendingReceiver;

