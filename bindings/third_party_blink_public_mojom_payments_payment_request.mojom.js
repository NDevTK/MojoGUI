// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_request.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


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

// Interface: PaymentRequestClient
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
};

payments.mojom.PaymentRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPaymentMethodChange(method_name, stringified_details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec.$,
      null,
      [method_name, stringified_details]);
  }

  onShippingAddressChange(address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec.$,
      null,
      [address]);
  }

  onShippingOptionChange(shipping_option_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec.$,
      null,
      [shipping_option_id]);
  }

  onPayerDetailChange(detail) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec.$,
      null,
      [detail]);
  }

  onPaymentResponse(response) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec.$,
      null,
      [response]);
  }

  onError(error, error_message) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      payments.mojom.PaymentRequestClient_OnError_ParamsSpec.$,
      null,
      [error, error_message]);
  }

  onComplete() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec.$,
      null,
      []);
  }

  onAbort(aborted_successfully) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec.$,
      null,
      [aborted_successfully]);
  }

  onCanMakePayment(result) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec.$,
      null,
      [result]);
  }

  onHasEnrolledInstrument(result) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec.$,
      null,
      [result]);
  }

  warnNoFavicon() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec.$,
      null,
      []);
  }

  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec.$,
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec.$,
      [url, url_before_redirects, did_follow_redirect]);
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

// ParamsSpec for OnPaymentMethodChange
payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPaymentMethodChange_Params',
      packedSize: 24,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stringified_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnShippingAddressChange
payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnShippingAddressChange_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnShippingOptionChange
payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnShippingOptionChange_Params',
      packedSize: 16,
      fields: [
        { name: 'shipping_option_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPayerDetailChange
payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPayerDetailChange_Params',
      packedSize: 16,
      fields: [
        { name: 'detail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPaymentResponse
payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnPaymentResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
payments.mojom.PaymentRequestClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnComplete
payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAbort
payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnAbort_Params',
      packedSize: 16,
      fields: [
        { name: 'aborted_successfully', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCanMakePayment
payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnCanMakePayment_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHasEnrolledInstrument
payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.OnHasEnrolledInstrument_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WarnNoFavicon
payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.WarnNoFavicon_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AllowConnectToSource
payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.AllowConnectToSource_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url_before_redirects', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'did_follow_redirect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestClient.AllowConnectToSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
payments.mojom.PaymentRequestClientPtr = payments.mojom.PaymentRequestClientRemote;
payments.mojom.PaymentRequestClientRequest = payments.mojom.PaymentRequestClientPendingReceiver;


// Interface: PaymentRequest
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
};

payments.mojom.PaymentRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(client, method_data, details, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentRequest_Init_ParamsSpec.$,
      null,
      [client, method_data, details, options]);
  }

  show(wait_for_updated_details, had_user_activation) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentRequest_Show_ParamsSpec.$,
      null,
      [wait_for_updated_details, had_user_activation]);
  }

  updateWith(details) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentRequest_UpdateWith_ParamsSpec.$,
      null,
      [details]);
  }

  onPaymentDetailsNotUpdated() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec.$,
      null,
      []);
  }

  abort() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      payments.mojom.PaymentRequest_Abort_ParamsSpec.$,
      null,
      []);
  }

  complete(result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      payments.mojom.PaymentRequest_Complete_ParamsSpec.$,
      null,
      [result]);
  }

  retry(errors) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      payments.mojom.PaymentRequest_Retry_ParamsSpec.$,
      null,
      [errors]);
  }

  canMakePayment() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec.$,
      null,
      []);
  }

  hasEnrolledInstrument() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for Init
payments.mojom.PaymentRequest_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Init_Params',
      packedSize: 40,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'method_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Show
payments.mojom.PaymentRequest_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Show_Params',
      packedSize: 24,
      fields: [
        { name: 'wait_for_updated_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'had_user_activation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateWith
payments.mojom.PaymentRequest_UpdateWith_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.UpdateWith_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPaymentDetailsNotUpdated
payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.OnPaymentDetailsNotUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Abort
payments.mojom.PaymentRequest_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Complete
payments.mojom.PaymentRequest_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Retry
payments.mojom.PaymentRequest_Retry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.Retry_Params',
      packedSize: 16,
      fields: [
        { name: 'errors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CanMakePayment
payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.CanMakePayment_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasEnrolledInstrument
payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequest.HasEnrolledInstrument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
payments.mojom.PaymentRequestPtr = payments.mojom.PaymentRequestRemote;
payments.mojom.PaymentRequestRequest = payments.mojom.PaymentRequestPendingReceiver;

