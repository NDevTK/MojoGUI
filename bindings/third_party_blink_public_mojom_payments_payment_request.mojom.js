// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_request.mojom
// Module: payments.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var blink = blink || {};

payments.mojom.PaymentErrorReasonSpec = { $: mojo.internal.Enum() };
payments.mojom.CanMakePaymentQueryResultSpec = { $: mojo.internal.Enum() };
payments.mojom.HasEnrolledInstrumentQueryResultSpec = { $: mojo.internal.Enum() };
payments.mojom.AndroidPayEnvironmentSpec = { $: mojo.internal.Enum() };
payments.mojom.BasicCardNetworkSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentShippingTypeSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentCompleteSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentResponseSpec = { $: {} };
payments.mojom.PayerDetailSpec = { $: {} };
payments.mojom.PaymentItemSpec = { $: {} };
payments.mojom.PaymentShippingOptionSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationRequestSpec = { $: {} };
payments.mojom.NetworkOrIssuerInformationSpec = { $: {} };
payments.mojom.PaymentEntityLogoSpec = { $: {} };
payments.mojom.PaymentMethodDataSpec = { $: {} };
payments.mojom.PaymentDetailsModifierSpec = { $: {} };
payments.mojom.PaymentDetailsSpec = { $: {} };
payments.mojom.PaymentOptionsSpec = { $: {} };
payments.mojom.PaymentRequestClient = {};
payments.mojom.PaymentRequestClient.$interfaceName = 'payments.mojom.PaymentRequestClient';
payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnError_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentRequest = {};
payments.mojom.PaymentRequest.$interfaceName = 'payments.mojom.PaymentRequest';
payments.mojom.PaymentRequest_Init_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Show_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_UpdateWith_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Abort_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Complete_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Retry_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec = { $: {} };

// Enum: PaymentErrorReason
payments.mojom.PaymentErrorReason = {
  UNKNOWN: 0,
  USER_CANCEL: 1,
  NOT_SUPPORTED: 2,
  NOT_SUPPORTED_FOR_INVALID_ORIGIN_OR_SSL: 3,
  ALREADY_SHOWING: 4,
  INVALID_DATA_FROM_RENDERER: 5,
  NOT_ALLOWED_ERROR: 6,
  USER_OPT_OUT: 7,
  USER_ACTIVATION_REQUIRED: 8,
};

// Enum: CanMakePaymentQueryResult
payments.mojom.CanMakePaymentQueryResult = {
  CAN_MAKE_PAYMENT: 0,
  CANNOT_MAKE_PAYMENT: 1,
};

// Enum: HasEnrolledInstrumentQueryResult
payments.mojom.HasEnrolledInstrumentQueryResult = {
  HAS_ENROLLED_INSTRUMENT: 0,
  HAS_NO_ENROLLED_INSTRUMENT: 1,
  QUERY_QUOTA_EXCEEDED: 2,
  WARNING_HAS_ENROLLED_INSTRUMENT: 3,
  WARNING_HAS_NO_ENROLLED_INSTRUMENT: 4,
};

// Enum: AndroidPayEnvironment
payments.mojom.AndroidPayEnvironment = {
  PRODUCTION: 0,
  TEST: 1,
};

// Enum: BasicCardNetwork
payments.mojom.BasicCardNetwork = {
  AMEX: 0,
  DINERS: 1,
  DISCOVER: 2,
  JCB: 3,
  MASTERCARD: 4,
  MIR: 5,
  UNIONPAY: 6,
  VISA: 7,
};

// Enum: PaymentShippingType
payments.mojom.PaymentShippingType = {
  SHIPPING: 0,
  DELIVERY: 1,
  PICKUP: 2,
};

// Enum: PaymentComplete
payments.mojom.PaymentComplete = {
  FAIL: 0,
  SUCCESS: 1,
  UNKNOWN: 2,
};

// Struct: PaymentResponse
mojo.internal.Struct(
    payments.mojom.PaymentResponseSpec, 'payments.mojom.PaymentResponse', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shipping_address', 16, 0, payments.mojom.PaymentAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shipping_option', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('payer', 32, 0, payments.mojom.PayerDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('get_assertion_authenticator_response', 40, 0, blink.mojom.GetAssertionAuthenticatorResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PayerDetail
mojo.internal.Struct(
    payments.mojom.PayerDetailSpec, 'payments.mojom.PayerDetail', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('phone', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentItem
mojo.internal.Struct(
    payments.mojom.PaymentItemSpec, 'payments.mojom.PaymentItem', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('amount', 8, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pending', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentShippingOption
mojo.internal.Struct(
    payments.mojom.PaymentShippingOptionSpec, 'payments.mojom.PaymentShippingOption', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('amount', 16, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SecurePaymentConfirmationRequest
mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationRequestSpec, 'payments.mojom.SecurePaymentConfirmationRequest', [
      mojo.internal.StructField('credential_ids', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('challenge', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('instrument', 16, 0, blink.mojom.PaymentCredentialInstrumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payee_origin', 32, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payee_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('rp_id', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 56, 0, blink.mojom.AuthenticationExtensionsClientInputsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_bound_pub_key_cred_params', 64, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('payment_entities_logos', 72, 0, mojo.internal.Array(payments.mojom.PaymentEntityLogoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('show_opt_out', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: NetworkOrIssuerInformation
mojo.internal.Struct(
    payments.mojom.NetworkOrIssuerInformationSpec, 'payments.mojom.NetworkOrIssuerInformation', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentEntityLogo
mojo.internal.Struct(
    payments.mojom.PaymentEntityLogoSpec, 'payments.mojom.PaymentEntityLogo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentMethodData
mojo.internal.Struct(
    payments.mojom.PaymentMethodDataSpec, 'payments.mojom.PaymentMethodData', [
      mojo.internal.StructField('supported_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('environment', 16, 0, payments.mojom.AndroidPayEnvironmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_networks', 24, 0, mojo.internal.Array(payments.mojom.BasicCardNetworkSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('secure_payment_confirmation', 32, 0, payments.mojom.SecurePaymentConfirmationRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('min_google_play_services_version', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('api_version', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PaymentDetailsModifier
mojo.internal.Struct(
    payments.mojom.PaymentDetailsModifierSpec, 'payments.mojom.PaymentDetailsModifier', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentItemSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('additional_display_items', 8, 0, mojo.internal.Array(payments.mojom.PaymentItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('method_data', 16, 0, payments.mojom.PaymentMethodDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentDetails
mojo.internal.Struct(
    payments.mojom.PaymentDetailsSpec, 'payments.mojom.PaymentDetails', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentItemSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_items', 8, 0, mojo.internal.Array(payments.mojom.PaymentItemSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('shipping_options', 16, 0, mojo.internal.Array(payments.mojom.PaymentShippingOptionSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('modifiers', 24, 0, mojo.internal.Array(payments.mojom.PaymentDetailsModifierSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('error', 32, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('shipping_address_errors', 40, 0, payments.mojom.AddressErrorsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('stringified_payment_method_errors', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PaymentOptions
mojo.internal.Struct(
    payments.mojom.PaymentOptionsSpec, 'payments.mojom.PaymentOptions', [
      mojo.internal.StructField('shipping_type', 0, 0, payments.mojom.PaymentShippingTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_payer_name', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_payer_email', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_payer_phone', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_shipping', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PaymentRequestClient
mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPaymentMethodChange_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnShippingAddressChange_Params', [
      mojo.internal.StructField('address', 0, 0, payments.mojom.PaymentAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnShippingOptionChange_Params', [
      mojo.internal.StructField('shipping_option_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPayerDetailChange_Params', [
      mojo.internal.StructField('detail', 0, 0, payments.mojom.PayerDetailSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPaymentResponse_Params', [
      mojo.internal.StructField('response', 0, 0, payments.mojom.PaymentResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnError_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, payments.mojom.PaymentErrorReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnAbort_Params', [
      mojo.internal.StructField('aborted_successfully', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnCanMakePayment_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.CanMakePaymentQueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.HasEnrolledInstrumentQueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec, 'payments.mojom.PaymentRequestClient_WarnNoFavicon_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec, 'payments.mojom.PaymentRequestClient_AllowConnectToSource_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_before_redirects', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('did_follow_redirect', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec, 'payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParams', [
      mojo.internal.StructField('allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

payments.mojom.PaymentRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentRequestClientRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentRequestClientPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPaymentMethodChange(method_name, stringified_details) {
    return this.$.onPaymentMethodChange(method_name, stringified_details);
  }
  onShippingAddressChange(address) {
    return this.$.onShippingAddressChange(address);
  }
  onShippingOptionChange(shipping_option_id) {
    return this.$.onShippingOptionChange(shipping_option_id);
  }
  onPayerDetailChange(detail) {
    return this.$.onPayerDetailChange(detail);
  }
  onPaymentResponse(response) {
    return this.$.onPaymentResponse(response);
  }
  onError(error, error_message) {
    return this.$.onError(error, error_message);
  }
  onComplete() {
    return this.$.onComplete();
  }
  onAbort(aborted_successfully) {
    return this.$.onAbort(aborted_successfully);
  }
  onCanMakePayment(result) {
    return this.$.onCanMakePayment(result);
  }
  onHasEnrolledInstrument(result) {
    return this.$.onHasEnrolledInstrument(result);
  }
  warnNoFavicon() {
    return this.$.warnNoFavicon();
  }
  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    return this.$.allowConnectToSource(url, url_before_redirects, did_follow_redirect);
  }
};

payments.mojom.PaymentRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPaymentMethodChange(method_name, stringified_details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec,
      null,
      [method_name, stringified_details],
      false);
  }

  onShippingAddressChange(address) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec,
      null,
      [address],
      false);
  }

  onShippingOptionChange(shipping_option_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec,
      null,
      [shipping_option_id],
      false);
  }

  onPayerDetailChange(detail) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec,
      null,
      [detail],
      false);
  }

  onPaymentResponse(response) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec,
      null,
      [response],
      false);
  }

  onError(error, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      payments.mojom.PaymentRequestClient_OnError_ParamsSpec,
      null,
      [error, error_message],
      false);
  }

  onComplete() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec,
      null,
      [],
      false);
  }

  onAbort(aborted_successfully) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec,
      null,
      [aborted_successfully],
      false);
  }

  onCanMakePayment(result) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec,
      null,
      [result],
      false);
  }

  onHasEnrolledInstrument(result) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec,
      null,
      [result],
      false);
  }

  warnNoFavicon() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec,
      null,
      [],
      false);
  }

  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec,
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec,
      [url, url_before_redirects, did_follow_redirect],
      false);
  }

};

payments.mojom.PaymentRequestClient.getRemote = function() {
  let remote = new payments.mojom.PaymentRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequestClient',
    'context');
  return remote.$;
};

payments.mojom.PaymentRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec.$.structSpec);
          const result = this.impl.onPaymentMethodChange(params.method_name, params.stringified_details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec.$.structSpec);
          const result = this.impl.onShippingAddressChange(params.address);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec.$.structSpec);
          const result = this.impl.onShippingOptionChange(params.shipping_option_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec.$.structSpec);
          const result = this.impl.onPayerDetailChange(params.detail);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec.$.structSpec);
          const result = this.impl.onPaymentResponse(params.response);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error, params.error_message);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onComplete();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec.$.structSpec);
          const result = this.impl.onAbort(params.aborted_successfully);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec.$.structSpec);
          const result = this.impl.onCanMakePayment(params.result);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.onHasEnrolledInstrument(params.result);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec.$.structSpec);
          const result = this.impl.warnNoFavicon();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec.$.structSpec);
          const result = this.impl.allowConnectToSource(params.url, params.url_before_redirects, params.did_follow_redirect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec);
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

payments.mojom.PaymentRequestClientReceiver = payments.mojom.PaymentRequestClientReceiver;

payments.mojom.PaymentRequestClientPtr = payments.mojom.PaymentRequestClientRemote;
payments.mojom.PaymentRequestClientRequest = payments.mojom.PaymentRequestClientPendingReceiver;


// Interface: PaymentRequest
mojo.internal.Struct(
    payments.mojom.PaymentRequest_Init_ParamsSpec, 'payments.mojom.PaymentRequest_Init_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentRequestClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('method_data', 8, 0, mojo.internal.Array(payments.mojom.PaymentMethodDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, payments.mojom.PaymentDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, payments.mojom.PaymentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Show_ParamsSpec, 'payments.mojom.PaymentRequest_Show_Params', [
      mojo.internal.StructField('wait_for_updated_details', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('had_user_activation', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_UpdateWith_ParamsSpec, 'payments.mojom.PaymentRequest_UpdateWith_Params', [
      mojo.internal.StructField('details', 0, 0, payments.mojom.PaymentDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec, 'payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Abort_ParamsSpec, 'payments.mojom.PaymentRequest_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Complete_ParamsSpec, 'payments.mojom.PaymentRequest_Complete_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.PaymentCompleteSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Retry_ParamsSpec, 'payments.mojom.PaymentRequest_Retry_Params', [
      mojo.internal.StructField('errors', 0, 0, payments.mojom.PaymentValidationErrorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec, 'payments.mojom.PaymentRequest_CanMakePayment_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec, 'payments.mojom.PaymentRequest_HasEnrolledInstrument_Params', [
    ],
    [[0, 8]]);

payments.mojom.PaymentRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentRequestRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentRequestPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(client, method_data, details, options) {
    return this.$.init(client, method_data, details, options);
  }
  show(wait_for_updated_details, had_user_activation) {
    return this.$.show(wait_for_updated_details, had_user_activation);
  }
  updateWith(details) {
    return this.$.updateWith(details);
  }
  onPaymentDetailsNotUpdated() {
    return this.$.onPaymentDetailsNotUpdated();
  }
  abort() {
    return this.$.abort();
  }
  complete(result) {
    return this.$.complete(result);
  }
  retry(errors) {
    return this.$.retry(errors);
  }
  canMakePayment() {
    return this.$.canMakePayment();
  }
  hasEnrolledInstrument() {
    return this.$.hasEnrolledInstrument();
  }
};

payments.mojom.PaymentRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  init(client, method_data, details, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentRequest_Init_ParamsSpec,
      null,
      [client, method_data, details, options],
      false);
  }

  show(wait_for_updated_details, had_user_activation) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentRequest_Show_ParamsSpec,
      null,
      [wait_for_updated_details, had_user_activation],
      false);
  }

  updateWith(details) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentRequest_UpdateWith_ParamsSpec,
      null,
      [details],
      false);
  }

  onPaymentDetailsNotUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      payments.mojom.PaymentRequest_Abort_ParamsSpec,
      null,
      [],
      false);
  }

  complete(result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      payments.mojom.PaymentRequest_Complete_ParamsSpec,
      null,
      [result],
      false);
  }

  retry(errors) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      payments.mojom.PaymentRequest_Retry_ParamsSpec,
      null,
      [errors],
      false);
  }

  canMakePayment() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec,
      null,
      [],
      false);
  }

  hasEnrolledInstrument() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec,
      null,
      [],
      false);
  }

};

payments.mojom.PaymentRequest.getRemote = function() {
  let remote = new payments.mojom.PaymentRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequest',
    'context');
  return remote.$;
};

payments.mojom.PaymentRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Show_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_UpdateWith_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Complete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Retry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.client, params.method_data, params.details, params.options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Show_ParamsSpec.$.structSpec);
          const result = this.impl.show(params.wait_for_updated_details, params.had_user_activation);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_UpdateWith_ParamsSpec.$.structSpec);
          const result = this.impl.updateWith(params.details);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onPaymentDetailsNotUpdated();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Complete_ParamsSpec.$.structSpec);
          const result = this.impl.complete(params.result);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Retry_ParamsSpec.$.structSpec);
          const result = this.impl.retry(params.errors);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec.$.structSpec);
          const result = this.impl.canMakePayment();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.hasEnrolledInstrument();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

payments.mojom.PaymentRequestReceiver = payments.mojom.PaymentRequestReceiver;

payments.mojom.PaymentRequestPtr = payments.mojom.PaymentRequestRemote;
payments.mojom.PaymentRequestRequest = payments.mojom.PaymentRequestPendingReceiver;

