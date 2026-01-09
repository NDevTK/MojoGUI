// Auto-generated MojoJS binding
// Source: chromium_src/components/payments/mojom/payment_request_data.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Struct: PaymentAddress
payments.mojom.PaymentAddressSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentAddress',
      packedSize: 88,
      fields: [
        { name: 'country', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'address_line', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'region', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'city', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dependent_locality', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'postal_code', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sorting_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'organization', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'recipient', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'phone', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentCurrencyAmount
payments.mojom.PaymentCurrencyAmountSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentCurrencyAmount',
      packedSize: 24,
      fields: [
        { name: 'currency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentValidationErrors
payments.mojom.PaymentValidationErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentValidationErrors',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payer', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PayerErrorsSpec, nullable: false },
        { name: 'shipping_address', packedOffset: 16, packedBitOffset: 0, type: payments.mojom.AddressErrorsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PayerErrors
payments.mojom.PayerErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PayerErrors',
      packedSize: 32,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'phone', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AddressErrors
payments.mojom.AddressErrorsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.AddressErrors',
      packedSize: 88,
      fields: [
        { name: 'address_line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'city', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'country', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dependent_locality', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'organization', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'phone', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'postal_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'recipient', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'region', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sorting_code', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
