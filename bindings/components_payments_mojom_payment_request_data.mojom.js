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
      packedSize: 16,
      fields: [
        { name: 'phone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'shipping_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'phone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'sorting_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
