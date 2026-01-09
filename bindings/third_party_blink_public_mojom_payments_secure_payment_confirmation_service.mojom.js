// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/secure_payment_confirmation_service.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Enum: PaymentCredentialStorageStatus
payments.mojom.PaymentCredentialStorageStatus = {
  SUCCESS: 0,
  FAILED_TO_STORE_CREDENTIAL: 1,
};
payments.mojom.PaymentCredentialStorageStatusSpec = { $: mojo.internal.Enum() };

// Enum: SecurePaymentConfirmationAvailabilityEnum
payments.mojom.SecurePaymentConfirmationAvailabilityEnum = {
  kAvailable: 0,
  kUnavailableUnknownReason: 1,
  kUnavailableFeatureNotEnabled: 2,
  kUnavailableNoPermissionPolicy: 3,
  kUnavailableNoUserVerifyingPlatformAuthenticator: 4,
};
payments.mojom.SecurePaymentConfirmationAvailabilityEnumSpec = { $: mojo.internal.Enum() };

// Interface: SecurePaymentConfirmationService
payments.mojom.SecurePaymentConfirmationService = {};

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
};

payments.mojom.SecurePaymentConfirmationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  securePaymentConfirmationAvailability() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec,
      []);
  }

  storePaymentCredential(credential_id, rp_id, user_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec,
      [credential_id, rp_id, user_id]);
  }

  makePaymentCredential(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec,
      payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec,
      [options]);
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

// ParamsSpec for SecurePaymentConfirmationAvailability
payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.SecurePaymentConfirmationService.SecurePaymentConfirmationAvailability_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

payments.mojom.SecurePaymentConfirmationService_SecurePaymentConfirmationAvailability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'availability', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.SecurePaymentConfirmationAvailabilityEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StorePaymentCredential
payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.SecurePaymentConfirmationService.StorePaymentCredential_Params',
      packedSize: 32,
      fields: [
        { name: 'credential_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'rp_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

payments.mojom.SecurePaymentConfirmationService_StorePaymentCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentCredentialStorageStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MakePaymentCredential
payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.SecurePaymentConfirmationService.MakePaymentCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialCreationOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

payments.mojom.SecurePaymentConfirmationService_MakePaymentCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false, minVersion: 0 },
        { name: 'credential', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MakeCredentialAuthenticatorResponseSpec, nullable: true, minVersion: 0 },
        { name: 'dom_exception_details', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
payments.mojom.SecurePaymentConfirmationServicePtr = payments.mojom.SecurePaymentConfirmationServiceRemote;
payments.mojom.SecurePaymentConfirmationServiceRequest = payments.mojom.SecurePaymentConfirmationServicePendingReceiver;

