// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_app.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Enum: PaymentHandlerStatus
payments.mojom.PaymentHandlerStatus = {
  SUCCESS: 0,
  NOT_FOUND: 1,
  NO_ACTIVE_WORKER: 2,
  STORAGE_OPERATION_FAILED: 3,
  FETCH_INSTRUMENT_ICON_FAILED: 4,
  FETCH_PAYMENT_APP_INFO_FAILED: 5,
};

// Enum: CanMakePaymentEventResponseType
payments.mojom.CanMakePaymentEventResponseType = {
  NO_EXPLICITLY_VERIFIED_METHODS: 0,
  NOT_INSTALLED: 1,
  NO_URL_BASED_PAYMENT_METHODS: 2,
  BOOLEAN_CONVERSION_ERROR: 3,
  BROWSER_ERROR: 4,
  INTERNAL_ERROR: 5,
  NO_RESPONSE: 6,
  REJECT: 7,
  SUCCESS: 8,
  TIMEOUT: 9,
};

// Enum: PaymentEventResponseType
payments.mojom.PaymentEventResponseType = {
  PAYER_NAME_EMPTY: 0,
  PAYER_EMAIL_EMPTY: 1,
  PAYER_PHONE_EMPTY: 2,
  PAYMENT_DETAILS_ABSENT: 3,
  PAYMENT_DETAILS_NOT_OBJECT: 4,
  PAYMENT_DETAILS_STRINGIFY_ERROR: 5,
  PAYMENT_EVENT_BROWSER_ERROR: 6,
  PAYMENT_EVENT_INTERNAL_ERROR: 7,
  PAYMENT_EVENT_NO_RESPONSE: 8,
  PAYMENT_EVENT_REJECT: 9,
  PAYMENT_EVENT_SERVICE_WORKER_ERROR: 10,
  PAYMENT_EVENT_SUCCESS: 11,
  PAYMENT_EVENT_TIMEOUT: 12,
  PAYMENT_HANDLER_ACTIVITY_DIED: 13,
  PAYMENT_HANDLER_FAIL_TO_LOAD_MAIN_FRAME: 14,
  PAYMENT_HANDLER_INSECURE_NAVIGATION: 15,
  PAYMENT_HANDLER_INSTALL_FAILED: 16,
  PAYMENT_HANDLER_WINDOW_CLOSING: 17,
  PAYMENT_METHOD_NAME_EMPTY: 18,
  SHIPPING_ADDRESS_INVALID: 19,
  SHIPPING_OPTION_EMPTY: 20,
};

// Enum: PaymentDelegation
payments.mojom.PaymentDelegation = {
  SHIPPING_ADDRESS: 0,
  PAYER_NAME: 1,
  PAYER_PHONE: 2,
  PAYER_EMAIL: 3,
};

// Struct: PaymentInstrument
payments.mojom.PaymentInstrument = class {
  constructor(values = {}) {
    this.method = values.method !== undefined ? values.method : "";
  }
};

// Struct: CanMakePaymentEventData
payments.mojom.CanMakePaymentEventData = class {
  constructor(values = {}) {
    this.modifiers = values.modifiers !== undefined ? values.modifiers : [];
  }
};

// Struct: PaymentRequestEventData
payments.mojom.PaymentRequestEventData = class {
  constructor(values = {}) {
    this.shipping_options = values.shipping_options !== undefined ? values.shipping_options : "";
    this.payment_handler_host = values.payment_handler_host !== undefined ? values.payment_handler_host : null;
  }
};

// Struct: CanMakePaymentResponse
payments.mojom.CanMakePaymentResponse = class {
  constructor(values = {}) {
    this.can_make_payment = values.can_make_payment !== undefined ? values.can_make_payment : false;
  }
};

// Struct: PaymentHandlerResponse
payments.mojom.PaymentHandlerResponse = class {
  constructor(values = {}) {
    this.shipping_option = values.shipping_option !== undefined ? values.shipping_option : "";
  }
};

// Interface: PaymentManager
payments.mojom.PaymentManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.PaymentManager';
  }

  init(context_url, service_worker_scope) {
    // Method: Init
    // Call: Init(context_url, service_worker_scope)
  }

  deletePaymentInstrument(instrument_key) {
    // Method: DeletePaymentInstrument
    return new Promise((resolve) => {
      // Call: DeletePaymentInstrument(instrument_key)
      resolve({});
    });
  }

  getPaymentInstrument(instrument_key) {
    // Method: GetPaymentInstrument
    return new Promise((resolve) => {
      // Call: GetPaymentInstrument(instrument_key)
      resolve({});
    });
  }

  keysOfPaymentInstruments() {
    // Method: KeysOfPaymentInstruments
    return new Promise((resolve) => {
      // Call: KeysOfPaymentInstruments()
      resolve({});
    });
  }

  hasPaymentInstrument(instrument_key) {
    // Method: HasPaymentInstrument
    return new Promise((resolve) => {
      // Call: HasPaymentInstrument(instrument_key)
      resolve({});
    });
  }

  setPaymentInstrument(instrument_key, instrument) {
    // Method: SetPaymentInstrument
    return new Promise((resolve) => {
      // Call: SetPaymentInstrument(instrument_key, instrument)
      resolve({});
    });
  }

  clearPaymentInstruments() {
    // Method: ClearPaymentInstruments
    return new Promise((resolve) => {
      // Call: ClearPaymentInstruments()
      resolve({});
    });
  }

  setUserHint(user_hint) {
    // Method: SetUserHint
    // Call: SetUserHint(user_hint)
  }

  info() {
    // Method: info
    // Call: info()
  }

  enableDelegations(delegations) {
    // Method: EnableDelegations
    return new Promise((resolve) => {
      // Call: EnableDelegations(delegations)
      resolve({});
    });
  }

};

payments.mojom.PaymentManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PaymentHandlerResponseCallback
payments.mojom.PaymentHandlerResponseCallbackPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.PaymentHandlerResponseCallback';
  }

  onResponseForAbortPayment(payment_aborted) {
    // Method: OnResponseForAbortPayment
    // Call: OnResponseForAbortPayment(payment_aborted)
  }

  onResponseForCanMakePayment(response) {
    // Method: OnResponseForCanMakePayment
    // Call: OnResponseForCanMakePayment(response)
  }

  onResponseForPaymentRequest(response) {
    // Method: OnResponseForPaymentRequest
    // Call: OnResponseForPaymentRequest(response)
  }

};

payments.mojom.PaymentHandlerResponseCallbackRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
