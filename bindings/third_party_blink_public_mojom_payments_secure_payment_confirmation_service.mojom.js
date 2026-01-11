// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/secure_payment_confirmation_service.mojom
// Module: payments.mojom

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var blink = blink || {};

payments.mojom.PaymentCredentialStorageStatusSpec = { $: mojo.internal.Enum() };
payments.mojom.SecurePaymentConfirmationAvailabilityEnumSpec = { $: mojo.internal.Enum() };
payments.mojom.SecurePaymentConfirmationService = {};
payments.mojom.SecurePaymentConfirmationService.$interfaceName = 'payments.mojom.SecurePaymentConfirmationService';
payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec = { $: {} };

// Enum: PaymentCredentialStorageStatus
payments.mojom.PaymentCredentialStorageStatus = {
  SUCCESS: 0,
  FAILED_TO_STORE_CREDENTIAL: 1,
};

// Enum: SecurePaymentConfirmationAvailabilityEnum
payments.mojom.SecurePaymentConfirmationAvailabilityEnum = {
  kAvailable: 0,
  kUnavailableUnknownReason: 1,
  kUnavailableFeatureNotEnabled: 2,
  kUnavailableNoPermissionPolicy: 3,
  kUnavailableNoUserVerifyingPlatformAuthenticator: 4,
};

// Interface: SecurePaymentConfirmationService
mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParams', [
      mojo.internal.StructField('availability', 0, 0, payments.mojom.SecurePaymentConfirmationAvailabilityEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_Params', [
      mojo.internal.StructField('credential_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('rp_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_id', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, payments.mojom.PaymentCredentialStorageStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.PublicKeyCredentialCreationOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec, 'payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.AuthenticatorStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credential', 8, 0, blink.mojom.MakeCredentialAuthenticatorResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dom_exception_details', 16, 0, blink.mojom.WebAuthnDOMExceptionDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

payments.mojom.SecurePaymentConfirmationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.SecurePaymentConfirmationServiceRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.SecurePaymentConfirmationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.SecurePaymentConfirmationServicePendingReceiver,
      handle);
    this.$ = new payments.mojom.SecurePaymentConfirmationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  securePaymentConfirmationAvailability() {
    return this.$.securePaymentConfirmationAvailability();
  }
  storePaymentCredential(credential_id, rp_id, user_id) {
    return this.$.storePaymentCredential(credential_id, rp_id, user_id);
  }
  makePaymentCredential(options) {
    return this.$.makePaymentCredential(options);
  }
};

payments.mojom.SecurePaymentConfirmationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SecurePaymentConfirmationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  securePaymentConfirmationAvailability() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec,
      [],
      false);
  }

  storePaymentCredential(credential_id, rp_id, user_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec,
      [credential_id, rp_id, user_id],
      false);
  }

  makePaymentCredential(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec,
      [options],
      false);
  }

};

payments.mojom.SecurePaymentConfirmationService.getRemote = function() {
  let remote = new payments.mojom.SecurePaymentConfirmationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.SecurePaymentConfirmationService',
    'context');
  return remote.$;
};

payments.mojom.SecurePaymentConfirmationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SecurePaymentConfirmationService', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec.$.structSpec);
          const result = this.impl.securePaymentConfirmationAvailability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec.$.structSpec);
          const result = this.impl.storePaymentCredential(params.credential_id, params.rp_id, params.user_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec.$.structSpec);
          const result = this.impl.makePaymentCredential(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec);
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

payments.mojom.SecurePaymentConfirmationServiceReceiver = payments.mojom.SecurePaymentConfirmationServiceReceiver;

payments.mojom.SecurePaymentConfirmationServicePtr = payments.mojom.SecurePaymentConfirmationServiceRemote;
payments.mojom.SecurePaymentConfirmationServiceRequest = payments.mojom.SecurePaymentConfirmationServicePendingReceiver;

