// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_request.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var blink = blink || {};
var url = url || {};
var url = url || {};
var blink = blink || {};


// Enum: PaymentErrorReason
payments.mojom.mojom.PaymentErrorReason = {
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
payments.mojom.mojom.PaymentErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: CanMakePaymentQueryResult
payments.mojom.mojom.CanMakePaymentQueryResult = {
  CAN_MAKE_PAYMENT: 0,
  CANNOT_MAKE_PAYMENT: 1,
};
payments.mojom.mojom.CanMakePaymentQueryResultSpec = { $: mojo.internal.Enum() };

// Enum: HasEnrolledInstrumentQueryResult
payments.mojom.mojom.HasEnrolledInstrumentQueryResult = {
  HAS_ENROLLED_INSTRUMENT: 0,
  HAS_NO_ENROLLED_INSTRUMENT: 1,
  QUERY_QUOTA_EXCEEDED: 2,
  WARNING_HAS_ENROLLED_INSTRUMENT: 3,
  WARNING_HAS_NO_ENROLLED_INSTRUMENT: 4,
};
payments.mojom.mojom.HasEnrolledInstrumentQueryResultSpec = { $: mojo.internal.Enum() };

// Enum: AndroidPayEnvironment
payments.mojom.mojom.AndroidPayEnvironment = {
  PRODUCTION: 0,
  TEST: 1,
};
payments.mojom.mojom.AndroidPayEnvironmentSpec = { $: mojo.internal.Enum() };

// Enum: BasicCardNetwork
payments.mojom.mojom.BasicCardNetwork = {
  AMEX: 0,
  DINERS: 1,
  DISCOVER: 2,
  JCB: 3,
  MASTERCARD: 4,
  MIR: 5,
  UNIONPAY: 6,
  VISA: 7,
};
payments.mojom.mojom.BasicCardNetworkSpec = { $: mojo.internal.Enum() };

// Enum: PaymentShippingType
payments.mojom.mojom.PaymentShippingType = {
  SHIPPING: 0,
  DELIVERY: 1,
  PICKUP: 2,
};
payments.mojom.mojom.PaymentShippingTypeSpec = { $: mojo.internal.Enum() };

// Enum: PaymentComplete
payments.mojom.mojom.PaymentComplete = {
  FAIL: 0,
  SUCCESS: 1,
  UNKNOWN: 2,
};
payments.mojom.mojom.PaymentCompleteSpec = { $: mojo.internal.Enum() };

// Struct: PaymentResponse
payments.mojom.mojom.PaymentResponseSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentResponse',
      packedSize: 56,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stringified_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shipping_address', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.PaymentAddressSpec, nullable: true, minVersion: 0 },
        { name: 'shipping_option', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'payer', packedOffset: 32, packedBitOffset: 0, type: payments.mojom.PayerDetailSpec, nullable: false, minVersion: 0 },
        { name: 'get_assertion_authenticator_response', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.GetAssertionAuthenticatorResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PayerDetail
payments.mojom.mojom.PayerDetailSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PayerDetail',
      packedSize: 32,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'phone', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PaymentItem
payments.mojom.mojom.PaymentItemSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentItem',
      packedSize: 32,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'amount', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false, minVersion: 0 },
        { name: 'pending', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PaymentShippingOption
payments.mojom.mojom.PaymentShippingOptionSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentShippingOption',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'amount', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false, minVersion: 0 },
        { name: 'selected', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SecurePaymentConfirmationRequest
payments.mojom.mojom.SecurePaymentConfirmationRequestSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.SecurePaymentConfirmationRequest',
      packedSize: 96,
      fields: [
        { name: 'credential_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'instrument', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PaymentCredentialInstrumentSpec, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'payee_origin', packedOffset: 32, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'payee_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'rp_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsClientInputsSpec, nullable: true, minVersion: 0 },
        { name: 'browser_bound_pub_key_cred_params', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec, false), nullable: false, minVersion: 0 },
        { name: 'show_opt_out', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'payment_entities_logos', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentEntityLogoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: NetworkOrIssuerInformation
payments.mojom.mojom.NetworkOrIssuerInformationSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.NetworkOrIssuerInformation',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PaymentEntityLogo
payments.mojom.mojom.PaymentEntityLogoSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentEntityLogo',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PaymentMethodData
payments.mojom.mojom.PaymentMethodDataSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentMethodData',
      packedSize: 56,
      fields: [
        { name: 'supported_method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stringified_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'environment', packedOffset: 32, packedBitOffset: 0, type: payments.mojom.AndroidPayEnvironmentSpec, nullable: false, minVersion: 0 },
        { name: 'min_google_play_services_version', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'api_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'supported_networks', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.BasicCardNetworkSpec, false), nullable: false, minVersion: 0 },
        { name: 'secure_payment_confirmation', packedOffset: 24, packedBitOffset: 0, type: payments.mojom.SecurePaymentConfirmationRequestSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PaymentDetailsModifier
payments.mojom.mojom.PaymentDetailsModifierSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentDetailsModifier',
      packedSize: 32,
      fields: [
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentItemSpec, nullable: true, minVersion: 0 },
        { name: 'additional_display_items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'method_data', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.PaymentMethodDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PaymentDetails
payments.mojom.mojom.PaymentDetailsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentDetails',
      packedSize: 72,
      fields: [
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentItemSpec, nullable: true, minVersion: 0 },
        { name: 'display_items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentItemSpec, false), nullable: true, minVersion: 0 },
        { name: 'shipping_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentShippingOptionSpec, false), nullable: true, minVersion: 0 },
        { name: 'modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentDetailsModifierSpec, false), nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shipping_address_errors', packedOffset: 40, packedBitOffset: 0, type: payments.mojom.AddressErrorsSpec, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'stringified_payment_method_errors', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: PaymentOptions
payments.mojom.mojom.PaymentOptionsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentOptions',
      packedSize: 16,
      fields: [
        { name: 'request_payer_name', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_payer_email', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_payer_phone', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'request_shipping', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shipping_type', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentShippingTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PaymentRequestClient
payments.mojom.mojom.PaymentRequestClient = {};

payments.mojom.mojom.PaymentRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.mojom.PaymentRequestClientRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.mojom.PaymentRequestClientPendingReceiver,
      handle);
    this.$ = new payments.mojom.mojom.PaymentRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.mojom.PaymentRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPaymentMethodChange(method_name, stringified_details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec,
      null,
      [method_name, stringified_details]);
  }

  onShippingAddressChange(address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec,
      null,
      [address]);
  }

  onShippingOptionChange(shipping_option_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec,
      null,
      [shipping_option_id]);
  }

  onPayerDetailChange(detail) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec,
      null,
      [detail]);
  }

  onPaymentResponse(response) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec,
      null,
      [response]);
  }

  onError(error, error_message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnError_ParamsSpec,
      null,
      [error, error_message]);
  }

  onComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnComplete_ParamsSpec,
      null,
      []);
  }

  onAbort(aborted_successfully) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnAbort_ParamsSpec,
      null,
      [aborted_successfully]);
  }

  onCanMakePayment(result) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec,
      null,
      [result]);
  }

  onHasEnrolledInstrument(result) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec,
      null,
      [result]);
  }

  warnNoFavicon() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec,
      null,
      []);
  }

  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      payments.mojom.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec,
      payments.mojom.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec,
      [url, url_before_redirects, did_follow_redirect]);
  }

};

payments.mojom.mojom.PaymentRequestClient.getRemote = function() {
  let remote = new payments.mojom.mojom.PaymentRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequestClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPaymentMethodChange
payments.mojom.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPaymentMethodChange_Params',
      packedSize: 24,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stringified_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnShippingAddressChange
payments.mojom.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnShippingAddressChange_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnShippingOptionChange
payments.mojom.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnShippingOptionChange_Params',
      packedSize: 16,
      fields: [
        { name: 'shipping_option_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPayerDetailChange
payments.mojom.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPayerDetailChange_Params',
      packedSize: 16,
      fields: [
        { name: 'detail', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PayerDetailSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPaymentResponse
payments.mojom.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPaymentResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
payments.mojom.mojom.PaymentRequestClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentErrorReasonSpec, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnComplete
payments.mojom.mojom.PaymentRequestClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAbort
payments.mojom.mojom.PaymentRequestClient_OnAbort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnAbort_Params',
      packedSize: 16,
      fields: [
        { name: 'aborted_successfully', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCanMakePayment
payments.mojom.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnCanMakePayment_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.CanMakePaymentQueryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHasEnrolledInstrument
payments.mojom.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnHasEnrolledInstrument_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.HasEnrolledInstrumentQueryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WarnNoFavicon
payments.mojom.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.WarnNoFavicon_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AllowConnectToSource
payments.mojom.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.AllowConnectToSource_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'url_before_redirects', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'did_follow_redirect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

payments.mojom.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.AllowConnectToSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.mojom.mojom.PaymentRequestClientPtr = payments.mojom.mojom.PaymentRequestClientRemote;
payments.mojom.mojom.PaymentRequestClientRequest = payments.mojom.mojom.PaymentRequestClientPendingReceiver;


// Interface: PaymentRequest
payments.mojom.mojom.PaymentRequest = {};

payments.mojom.mojom.PaymentRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.mojom.PaymentRequestRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.mojom.PaymentRequestPendingReceiver,
      handle);
    this.$ = new payments.mojom.mojom.PaymentRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.mojom.PaymentRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(client, method_data, details, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.mojom.PaymentRequest_Init_ParamsSpec,
      null,
      [client, method_data, details, options]);
  }

  show(wait_for_updated_details, had_user_activation) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.mojom.PaymentRequest_Show_ParamsSpec,
      null,
      [wait_for_updated_details, had_user_activation]);
  }

  updateWith(details) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.mojom.PaymentRequest_UpdateWith_ParamsSpec,
      null,
      [details]);
  }

  onPaymentDetailsNotUpdated() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec,
      null,
      []);
  }

  abort() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      payments.mojom.mojom.PaymentRequest_Abort_ParamsSpec,
      null,
      []);
  }

  complete(result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      payments.mojom.mojom.PaymentRequest_Complete_ParamsSpec,
      null,
      [result]);
  }

  retry(errors) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      payments.mojom.mojom.PaymentRequest_Retry_ParamsSpec,
      null,
      [errors]);
  }

  canMakePayment() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      payments.mojom.mojom.PaymentRequest_CanMakePayment_ParamsSpec,
      null,
      []);
  }

  hasEnrolledInstrument() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      payments.mojom.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec,
      null,
      []);
  }

};

payments.mojom.mojom.PaymentRequest.getRemote = function() {
  let remote = new payments.mojom.mojom.PaymentRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequest',
    'context');
  return remote.$;
};

// ParamsSpec for Init
payments.mojom.mojom.PaymentRequest_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Init_Params',
      packedSize: 40,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(payments.mojom.PaymentRequestClientRemote), nullable: false, minVersion: 0 },
        { name: 'method_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PaymentMethodDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.PaymentDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: payments.mojom.PaymentOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Show
payments.mojom.mojom.PaymentRequest_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Show_Params',
      packedSize: 16,
      fields: [
        { name: 'wait_for_updated_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'had_user_activation', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateWith
payments.mojom.mojom.PaymentRequest_UpdateWith_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.UpdateWith_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPaymentDetailsNotUpdated
payments.mojom.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.OnPaymentDetailsNotUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Abort
payments.mojom.mojom.PaymentRequest_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Complete
payments.mojom.mojom.PaymentRequest_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentCompleteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Retry
payments.mojom.mojom.PaymentRequest_Retry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Retry_Params',
      packedSize: 16,
      fields: [
        { name: 'errors', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentValidationErrorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanMakePayment
payments.mojom.mojom.PaymentRequest_CanMakePayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.CanMakePayment_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HasEnrolledInstrument
payments.mojom.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.HasEnrolledInstrument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
payments.mojom.mojom.PaymentRequestPtr = payments.mojom.mojom.PaymentRequestRemote;
payments.mojom.mojom.PaymentRequestRequest = payments.mojom.mojom.PaymentRequestPendingReceiver;

