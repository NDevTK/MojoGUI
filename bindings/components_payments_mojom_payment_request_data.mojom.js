// Auto-generated MojoJS binding
// Source: chromium_src/components/payments/mojom/payment_request_data.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Struct: PaymentAddress
payments.mojom.mojom.PaymentAddressSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentAddress',
      packedSize: 88,
      fields: [
        { name: 'country', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address_line', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'city', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dependent_locality', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'postal_code', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sorting_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'organization', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'recipient', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'phone', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: PaymentCurrencyAmount
payments.mojom.mojom.PaymentCurrencyAmountSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentCurrencyAmount',
      packedSize: 24,
      fields: [
        { name: 'currency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PaymentValidationErrors
payments.mojom.mojom.PaymentValidationErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentValidationErrors',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'payer', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PayerErrorsSpec, nullable: false, minVersion: 0 },
        { name: 'shipping_address', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.AddressErrorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PayerErrors
payments.mojom.mojom.PayerErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PayerErrors',
      packedSize: 32,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'phone', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AddressErrors
payments.mojom.mojom.AddressErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.AddressErrors',
      packedSize: 88,
      fields: [
        { name: 'address_line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'city', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'country', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dependent_locality', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'organization', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'phone', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'postal_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'recipient', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sorting_code', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};
