// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_app.mojom
// Module: payments.mojom

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var blink = blink || {};
var url = url || {};

payments.mojom.PaymentHandlerStatusSpec = { $: mojo.internal.Enum() };
payments.mojom.CanMakePaymentEventResponseTypeSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentEventResponseTypeSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentDelegationSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentInstrumentSpec = { $: {} };
payments.mojom.CanMakePaymentEventDataSpec = { $: {} };
payments.mojom.PaymentRequestEventDataSpec = { $: {} };
payments.mojom.CanMakePaymentResponseSpec = { $: {} };
payments.mojom.PaymentHandlerResponseSpec = { $: {} };
payments.mojom.PaymentManager = {};
payments.mojom.PaymentManager.$interfaceName = 'payments.mojom.PaymentManager';
payments.mojom.PaymentManager_Init_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentManager_SetUserHint_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_EnableDelegations_ParamsSpec = { $: {} };
payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentHandlerResponseCallback = {};
payments.mojom.PaymentHandlerResponseCallback.$interfaceName = 'payments.mojom.PaymentHandlerResponseCallback';
payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec = { $: {} };
payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec = { $: {} };
payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    payments.mojom.PaymentInstrumentSpec, 'payments.mojom.PaymentInstrument', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icons', 8, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('method', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CanMakePaymentEventData
mojo.internal.Struct(
    payments.mojom.CanMakePaymentEventDataSpec, 'payments.mojom.CanMakePaymentEventData', [
      mojo.internal.StructField('top_origin', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payment_request_origin', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method_data', 16, 0, mojo.internal.Array(payments.mojom.PaymentMethodDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 24, 0, mojo.internal.Array(payments.mojom.PaymentDetailsModifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PaymentRequestEventData
mojo.internal.Struct(
    payments.mojom.PaymentRequestEventDataSpec, 'payments.mojom.PaymentRequestEventData', [
      mojo.internal.StructField('top_origin', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payment_request_origin', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payment_request_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('method_data', 24, 0, mojo.internal.Array(payments.mojom.PaymentMethodDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('total', 32, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 40, 0, mojo.internal.Array(payments.mojom.PaymentDetailsModifierSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('instrument_key', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_options', 56, 0, payments.mojom.PaymentOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shipping_options', 64, 0, mojo.internal.Array(payments.mojom.PaymentShippingOptionSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('payment_handler_host', 72, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentHandlerHostRemote), null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: CanMakePaymentResponse
mojo.internal.Struct(
    payments.mojom.CanMakePaymentResponseSpec, 'payments.mojom.CanMakePaymentResponse', [
      mojo.internal.StructField('response_type', 0, 0, payments.mojom.CanMakePaymentEventResponseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_make_payment', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentHandlerResponse
mojo.internal.Struct(
    payments.mojom.PaymentHandlerResponseSpec, 'payments.mojom.PaymentHandlerResponse', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response_type', 16, 0, payments.mojom.PaymentEventResponseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payer_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('payer_email', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('payer_phone', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('shipping_address', 48, 0, payments.mojom.PaymentAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shipping_option', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Interface: PaymentManager
mojo.internal.Struct(
    payments.mojom.PaymentManager_Init_ParamsSpec, 'payments.mojom.PaymentManager_Init_Params', [
      mojo.internal.StructField('context_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec, 'payments.mojom.PaymentManager_DeletePaymentInstrument_Params', [
      mojo.internal.StructField('instrument_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec, 'payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec, 'payments.mojom.PaymentManager_GetPaymentInstrument_Params', [
      mojo.internal.StructField('instrument_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec, 'payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParams', [
      mojo.internal.StructField('instrument', 0, 0, payments.mojom.PaymentInstrumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec, 'payments.mojom.PaymentManager_KeysOfPaymentInstruments_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec, 'payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec, 'payments.mojom.PaymentManager_HasPaymentInstrument_Params', [
      mojo.internal.StructField('instrument_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec, 'payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec, 'payments.mojom.PaymentManager_SetPaymentInstrument_Params', [
      mojo.internal.StructField('instrument_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('instrument', 8, 0, payments.mojom.PaymentInstrumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec, 'payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec, 'payments.mojom.PaymentManager_ClearPaymentInstruments_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec, 'payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_SetUserHint_ParamsSpec, 'payments.mojom.PaymentManager_SetUserHint_Params', [
      mojo.internal.StructField('user_hint', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_EnableDelegations_ParamsSpec, 'payments.mojom.PaymentManager_EnableDelegations_Params', [
      mojo.internal.StructField('delegations', 0, 0, mojo.internal.Array(payments.mojom.PaymentDelegationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec, 'payments.mojom.PaymentManager_EnableDelegations_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentHandlerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  init(context_url, service_worker_scope) {
    return this.$.init(context_url, service_worker_scope);
  }
  deletePaymentInstrument(instrument_key) {
    return this.$.deletePaymentInstrument(instrument_key);
  }
  getPaymentInstrument(instrument_key) {
    return this.$.getPaymentInstrument(instrument_key);
  }
  keysOfPaymentInstruments() {
    return this.$.keysOfPaymentInstruments();
  }
  hasPaymentInstrument(instrument_key) {
    return this.$.hasPaymentInstrument(instrument_key);
  }
  setPaymentInstrument(instrument_key, instrument) {
    return this.$.setPaymentInstrument(instrument_key, instrument);
  }
  clearPaymentInstruments() {
    return this.$.clearPaymentInstruments();
  }
  setUserHint(user_hint) {
    return this.$.setUserHint(user_hint);
  }
  enableDelegations(delegations) {
    return this.$.enableDelegations(delegations);
  }
};

payments.mojom.PaymentManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentManager', [
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

  init(context_url, service_worker_scope) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentManager_Init_ParamsSpec,
      null,
      [context_url, service_worker_scope],
      false);
  }

  deletePaymentInstrument(instrument_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec,
      [instrument_key],
      false);
  }

  getPaymentInstrument(instrument_key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec,
      [instrument_key],
      false);
  }

  keysOfPaymentInstruments() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec,
      payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec,
      [],
      false);
  }

  hasPaymentInstrument(instrument_key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec,
      [instrument_key],
      false);
  }

  setPaymentInstrument(instrument_key, instrument) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec,
      payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec,
      [instrument_key, instrument],
      false);
  }

  clearPaymentInstruments() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec,
      payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec,
      [],
      false);
  }

  setUserHint(user_hint) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      payments.mojom.PaymentManager_SetUserHint_ParamsSpec,
      null,
      [user_hint],
      false);
  }

  enableDelegations(delegations) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      payments.mojom.PaymentManager_EnableDelegations_ParamsSpec,
      payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec,
      [delegations],
      false);
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

payments.mojom.PaymentManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentManager', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(payments.mojom.PaymentManager_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_SetUserHint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentManager_EnableDelegations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.context_url, params.service_worker_scope);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_DeletePaymentInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.deletePaymentInstrument(params.instrument_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_DeletePaymentInstrument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_GetPaymentInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.getPaymentInstrument(params.instrument_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_GetPaymentInstrument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_KeysOfPaymentInstruments_ParamsSpec.$.structSpec);
          const result = this.impl.keysOfPaymentInstruments();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_KeysOfPaymentInstruments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_HasPaymentInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.hasPaymentInstrument(params.instrument_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_HasPaymentInstrument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_SetPaymentInstrument_ParamsSpec.$.structSpec);
          const result = this.impl.setPaymentInstrument(params.instrument_key, params.instrument);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_SetPaymentInstrument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_ClearPaymentInstruments_ParamsSpec.$.structSpec);
          const result = this.impl.clearPaymentInstruments();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_ClearPaymentInstruments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_SetUserHint_ParamsSpec.$.structSpec);
          const result = this.impl.setUserHint(params.user_hint);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentManager_EnableDelegations_ParamsSpec.$.structSpec);
          const result = this.impl.enableDelegations(params.delegations);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentManager_EnableDelegations_ResponseParamsSpec);
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

payments.mojom.PaymentManagerReceiver = payments.mojom.PaymentManagerReceiver;

payments.mojom.PaymentManagerPtr = payments.mojom.PaymentManagerRemote;
payments.mojom.PaymentManagerRequest = payments.mojom.PaymentManagerPendingReceiver;


// Interface: PaymentHandlerResponseCallback
mojo.internal.Struct(
    payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec, 'payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_Params', [
      mojo.internal.StructField('payment_aborted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec, 'payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_Params', [
      mojo.internal.StructField('response', 0, 0, payments.mojom.CanMakePaymentResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec, 'payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_Params', [
      mojo.internal.StructField('response', 0, 0, payments.mojom.PaymentHandlerResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onResponseForAbortPayment(payment_aborted) {
    return this.$.onResponseForAbortPayment(payment_aborted);
  }
  onResponseForCanMakePayment(response) {
    return this.$.onResponseForCanMakePayment(response);
  }
  onResponseForPaymentRequest(response) {
    return this.$.onResponseForPaymentRequest(response);
  }
};

payments.mojom.PaymentHandlerResponseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentHandlerResponseCallback', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponseForAbortPayment(payment_aborted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec,
      null,
      [payment_aborted],
      false);
  }

  onResponseForCanMakePayment(response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec,
      null,
      [response],
      false);
  }

  onResponseForPaymentRequest(response) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec,
      null,
      [response],
      false);
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

payments.mojom.PaymentHandlerResponseCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentHandlerResponseCallback', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForAbortPayment_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseForAbortPayment(params.payment_aborted);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForCanMakePayment_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseForCanMakePayment(params.response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentHandlerResponseCallback_OnResponseForPaymentRequest_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseForPaymentRequest(params.response);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

payments.mojom.PaymentHandlerResponseCallbackReceiver = payments.mojom.PaymentHandlerResponseCallbackReceiver;

payments.mojom.PaymentHandlerResponseCallbackPtr = payments.mojom.PaymentHandlerResponseCallbackRemote;
payments.mojom.PaymentHandlerResponseCallbackRequest = payments.mojom.PaymentHandlerResponseCallbackPendingReceiver;

