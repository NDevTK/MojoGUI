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
payments.mojom.PaymentResponse = class {
  constructor(values = {}) {
    this.method_name = values.method_name !== undefined ? values.method_name : "";
    this.stringified_details = values.stringified_details !== undefined ? values.stringified_details : "";
  }
};

// Struct: PayerDetail
payments.mojom.PayerDetail = class {
  constructor(values = {}) {
    this.phone = values.phone !== undefined ? values.phone : "";
  }
};

// Struct: PaymentItem
payments.mojom.PaymentItem = class {
  constructor(values = {}) {
    this.pending = values.pending !== undefined ? values.pending : false;
  }
};

// Struct: PaymentShippingOption
payments.mojom.PaymentShippingOption = class {
  constructor(values = {}) {
    this.selected = values.selected !== undefined ? values.selected : false;
  }
};

// Struct: SecurePaymentConfirmationRequest
payments.mojom.SecurePaymentConfirmationRequest = class {
  constructor(values = {}) {
    this.credential_ids = values.credential_ids !== undefined ? values.credential_ids : 0;
    this.browser_bound_pub_key_cred_params = values.browser_bound_pub_key_cred_params !== undefined ? values.browser_bound_pub_key_cred_params : 0;
    this.payment_entities_logos = values.payment_entities_logos !== undefined ? values.payment_entities_logos : false;
  }
};

// Struct: NetworkOrIssuerInformation
payments.mojom.NetworkOrIssuerInformation = class {
  constructor(values = {}) {
    this.icon = values.icon !== undefined ? values.icon : "";
  }
};

// Struct: PaymentEntityLogo
payments.mojom.PaymentEntityLogo = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: PaymentMethodData
payments.mojom.PaymentMethodData = class {
  constructor(values = {}) {
    this.supported_method = values.supported_method !== undefined ? values.supported_method : "";
    this.A = values.A !== undefined ? values.A : null;
  }
};

// Struct: PaymentDetailsModifier
payments.mojom.PaymentDetailsModifier = class {
  constructor(values = {}) {
    this.method_data = values.method_data !== undefined ? values.method_data : [];
  }
};

// Struct: PaymentDetails
payments.mojom.PaymentDetails = class {
  constructor(values = {}) {
    this.total = values.total !== undefined ? values.total : null;
    this.ignores = values.ignores !== undefined ? values.ignores : null;
    this.shipping_address_errors = values.shipping_address_errors !== undefined ? values.shipping_address_errors : "";
    this.stringified_payment_method_errors = values.stringified_payment_method_errors !== undefined ? values.stringified_payment_method_errors : "";
  }
};

// Struct: PaymentOptions
payments.mojom.PaymentOptions = class {
  constructor(values = {}) {
    this.shipping_type = values.shipping_type !== undefined ? values.shipping_type : false;
  }
};

// Interface: PaymentRequestClient
payments.mojom.PaymentRequestClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.PaymentRequestClient';
  }

  onPaymentMethodChange(method_name, stringified_details) {
    // Method: OnPaymentMethodChange
    // Call: OnPaymentMethodChange(method_name, stringified_details)
  }

  onShippingAddressChange(address) {
    // Method: OnShippingAddressChange
    // Call: OnShippingAddressChange(address)
  }

  onShippingOptionChange(shipping_option_id) {
    // Method: OnShippingOptionChange
    // Call: OnShippingOptionChange(shipping_option_id)
  }

  onPayerDetailChange(detail) {
    // Method: OnPayerDetailChange
    // Call: OnPayerDetailChange(detail)
  }

  onPaymentResponse(response) {
    // Method: OnPaymentResponse
    // Call: OnPaymentResponse(response)
  }

  onError(error, error_message) {
    // Method: OnError
    // Call: OnError(error, error_message)
  }

  onComplete() {
    // Method: OnComplete
    // Call: OnComplete()
  }

  onAbort(aborted_successfully) {
    // Method: OnAbort
    // Call: OnAbort(aborted_successfully)
  }

  onCanMakePayment(result) {
    // Method: OnCanMakePayment
    // Call: OnCanMakePayment(result)
  }

  onHasEnrolledInstrument(result) {
    // Method: OnHasEnrolledInstrument
    // Call: OnHasEnrolledInstrument(result)
  }

  warnNoFavicon() {
    // Method: WarnNoFavicon
    // Call: WarnNoFavicon()
  }

  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    // Method: AllowConnectToSource
    return new Promise((resolve) => {
      // Call: AllowConnectToSource(url, url_before_redirects, did_follow_redirect)
      resolve({});
    });
  }

};

payments.mojom.PaymentRequestClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PaymentRequest
payments.mojom.PaymentRequestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.PaymentRequest';
  }

  init(client, method_data, details, options) {
    // Method: Init
    // Call: Init(client, method_data, details, options)
  }

  show(wait_for_updated_details, had_user_activation) {
    // Method: Show
    // Call: Show(wait_for_updated_details, had_user_activation)
  }

  updateWith(details) {
    // Method: UpdateWith
    // Call: UpdateWith(details)
  }

  onPaymentDetailsNotUpdated() {
    // Method: OnPaymentDetailsNotUpdated
    // Call: OnPaymentDetailsNotUpdated()
  }

  abort() {
    // Method: Abort
    // Call: Abort()
  }

  complete(result) {
    // Method: Complete
    // Call: Complete(result)
  }

  retry(errors) {
    // Method: Retry
    // Call: Retry(errors)
  }

  canMakePayment() {
    // Method: CanMakePayment
    // Call: CanMakePayment()
  }

  hasEnrolledInstrument() {
    // Method: HasEnrolledInstrument
    // Call: HasEnrolledInstrument()
  }

};

payments.mojom.PaymentRequestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
