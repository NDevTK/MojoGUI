// Auto-generated MojoJS binding
// Source: chromium_src/components/payments/mojom/payment_request_data.mojom
// Module: payments.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};

payments.mojom.PaymentAddressSpec = { $: {} };
payments.mojom.PaymentCurrencyAmountSpec = { $: {} };
payments.mojom.PaymentValidationErrorsSpec = { $: {} };
payments.mojom.PayerErrorsSpec = { $: {} };
payments.mojom.AddressErrorsSpec = { $: {} };

// Struct: PaymentAddress
mojo.internal.Struct(
    payments.mojom.PaymentAddressSpec, 'payments.mojom.PaymentAddress', [
      mojo.internal.StructField('country', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address_line', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('region', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('city', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dependent_locality', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('postal_code', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sorting_code', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('organization', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('recipient', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('phone', 72, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: PaymentCurrencyAmount
mojo.internal.Struct(
    payments.mojom.PaymentCurrencyAmountSpec, 'payments.mojom.PaymentCurrencyAmount', [
      mojo.internal.StructField('currency', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentValidationErrors
mojo.internal.Struct(
    payments.mojom.PaymentValidationErrorsSpec, 'payments.mojom.PaymentValidationErrors', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payer', 8, 0, payments.mojom.PayerErrorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shipping_address', 16, 0, payments.mojom.AddressErrorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PayerErrors
mojo.internal.Struct(
    payments.mojom.PayerErrorsSpec, 'payments.mojom.PayerErrors', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('phone', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AddressErrors
mojo.internal.Struct(
    payments.mojom.AddressErrorsSpec, 'payments.mojom.AddressErrors', [
      mojo.internal.StructField('address_line', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('city', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('country', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dependent_locality', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('organization', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('phone', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('postal_code', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('recipient', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('region', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sorting_code', 72, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 88]]);
