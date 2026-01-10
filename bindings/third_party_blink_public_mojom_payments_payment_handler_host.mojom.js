// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_handler_host.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var components = components || {};
var blink = blink || {};

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
};

payments.mojom.PaymentHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  changePaymentMethod(method_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec,
      [method_data],
      false);
  }

  changeShippingOption(shipping_option_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec,
      [shipping_option_id],
      false);
  }

  changeShippingAddress(shipping_address) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec,
      [shipping_address],
      false);
  }

};

payments.mojom.PaymentHandlerHost.getRemote = function() {
  let remote = new payments.mojom.PaymentHandlerHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'payments.mojom.PaymentHandlerHost',
    'context');
  return remote.$;
};

payments.mojom.PaymentHandlerHostPtr = payments.mojom.PaymentHandlerHostRemote;
payments.mojom.PaymentHandlerHostRequest = payments.mojom.PaymentHandlerHostPendingReceiver;

