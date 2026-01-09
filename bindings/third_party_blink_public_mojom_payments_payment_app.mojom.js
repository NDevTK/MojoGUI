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
  INCOGNITO: 0,
  NO_EXPLICITLY_VERIFIED_METHODS: 1,
  NOT_INSTALLED: 2,
  NO_URL_BASED_PAYMENT_METHODS: 3,
  BOOLEAN_CONVERSION_ERROR: 4,
  BROWSER_ERROR: 5,
  INTERNAL_ERROR: 6,
  NO_RESPONSE: 7,
  REJECT: 8,
  SUCCESS: 9,
  TIMEOUT: 10,
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
payments.mojom.PaymentInstrumentSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentInstrument',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'icons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'method', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CanMakePaymentEventData
payments.mojom.CanMakePaymentEventDataSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.CanMakePaymentEventData',
      packedSize: 40,
      fields: [
        { name: 'top_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'payment_request_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'method_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentRequestEventData
payments.mojom.PaymentRequestEventDataSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestEventData',
      packedSize: 88,
      fields: [
        { name: 'top_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'payment_request_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'payment_request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'method_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'total', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'modifiers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'instrument_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payment_options', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'shipping_options', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'payment_handler_host', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CanMakePaymentResponse
payments.mojom.CanMakePaymentResponseSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.CanMakePaymentResponse',
      packedSize: 24,
      fields: [
        { name: 'response_type', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.CanMakePaymentEventResponseTypeSpec, nullable: false },
        { name: 'can_make_payment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentHandlerResponse
payments.mojom.PaymentHandlerResponseSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerResponse',
      packedSize: 72,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stringified_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'response_type', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.PaymentEventResponseTypeSpec, nullable: false },
        { name: 'payer_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'payer_email', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'payer_phone', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shipping_address', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'shipping_option', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PaymentManager
payments.mojom.PaymentManager = {};

payments.mojom.PaymentManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentManagerRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentManagerPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.PaymentManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(context_url, service_worker_scope) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentManager_Init_ParamsSpec,
      null,
      [context_url, service_worker_scope]);
  }

  deletePaymentInstrument(instrument_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec,
      [instrument_key]);
  }

  getPaymentInstrument(instrument_key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec,
      [instrument_key]);
  }

  keysOfPaymentInstruments() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec,
      payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec,
      []);
  }

  hasPaymentInstrument(instrument_key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec,
      [instrument_key]);
  }

  setPaymentInstrument(instrument_key, instrument) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec,
      [instrument_key, instrument]);
  }

  clearPaymentInstruments() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec,
      payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec,
      []);
  }

  setUserHint(user_hint) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      payments.mojom.PaymentManager_SetUserHint_ParamsSpec,
      null,
      [user_hint]);
  }

  enableDelegations(delegations) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      payments.mojom.PaymentManager_EnableDelegations_ParamsSpec,
      payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec,
      [delegations]);
  }

};

payments.mojom.PaymentManager.getRemote = function() {
  let remote = new payments.mojom.PaymentManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentManager',
    'context');
  return remote.$;
};

// ParamsSpec for Init
payments.mojom.PaymentManager_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.Init_Params',
      packedSize: 24,
      fields: [
        { name: 'context_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'service_worker_scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeletePaymentInstrument
payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.DeletePaymentInstrument_Params',
      packedSize: 16,
      fields: [
        { name: 'instrument_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.DeletePaymentInstrument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPaymentInstrument
payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.GetPaymentInstrument_Params',
      packedSize: 16,
      fields: [
        { name: 'instrument_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.GetPaymentInstrument_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'instrument', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentInstrumentSpec, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for KeysOfPaymentInstruments
payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.KeysOfPaymentInstruments_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.KeysOfPaymentInstruments_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasPaymentInstrument
payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.HasPaymentInstrument_Params',
      packedSize: 16,
      fields: [
        { name: 'instrument_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.HasPaymentInstrument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPaymentInstrument
payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.SetPaymentInstrument_Params',
      packedSize: 24,
      fields: [
        { name: 'instrument_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'instrument', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentInstrumentSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.SetPaymentInstrument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearPaymentInstruments
payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.ClearPaymentInstruments_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.ClearPaymentInstruments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUserHint
payments.mojom.PaymentManager_SetUserHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.SetUserHint_Params',
      packedSize: 16,
      fields: [
        { name: 'user_hint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableDelegations
payments.mojom.PaymentManager_EnableDelegations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.EnableDelegations_Params',
      packedSize: 16,
      fields: [
        { name: 'delegations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentManager.EnableDelegations_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
payments.mojom.PaymentManagerPtr = payments.mojom.PaymentManagerRemote;
payments.mojom.PaymentManagerRequest = payments.mojom.PaymentManagerPendingReceiver;


// Interface: PaymentHandlerResponseCallback
payments.mojom.PaymentHandlerResponseCallback = {};

payments.mojom.PaymentHandlerResponseCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentHandlerResponseCallbackRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentHandlerResponseCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentHandlerResponseCallbackPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentHandlerResponseCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.PaymentHandlerResponseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponseForAbortPayment(payment_aborted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec,
      null,
      [payment_aborted]);
  }

  onResponseForCanMakePayment(response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec,
      null,
      [response]);
  }

  onResponseForPaymentRequest(response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec,
      null,
      [response]);
  }

};

payments.mojom.PaymentHandlerResponseCallback.getRemote = function() {
  let remote = new payments.mojom.PaymentHandlerResponseCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentHandlerResponseCallback',
    'context');
  return remote.$;
};

// ParamsSpec for OnResponseForAbortPayment
payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerResponseCallback.OnResponseForAbortPayment_Params',
      packedSize: 16,
      fields: [
        { name: 'payment_aborted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnResponseForCanMakePayment
payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerResponseCallback.OnResponseForCanMakePayment_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.CanMakePaymentResponseSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnResponseForPaymentRequest
payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerResponseCallback.OnResponseForPaymentRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentHandlerResponseSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
payments.mojom.PaymentHandlerResponseCallbackPtr = payments.mojom.PaymentHandlerResponseCallbackRemote;
payments.mojom.PaymentHandlerResponseCallbackRequest = payments.mojom.PaymentHandlerResponseCallbackPendingReceiver;

