// Auto-generated MojoJS binding
// Source: chromium_src/components/digital_goods/mojom/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var url = url || {};
var components = components || {};

payments.mojom.BillingResponseCodeSpec = { $: mojo.internal.Enum() };
payments.mojom.ItemTypeSpec = { $: mojo.internal.Enum() };
payments.mojom.CreateDigitalGoodsResponseCodeSpec = { $: mojo.internal.Enum() };
payments.mojom.ItemDetailsSpec = { $: {} };
payments.mojom.PurchaseReferenceSpec = { $: {} };

// Enum: BillingResponseCode
payments.mojom.BillingResponseCode = {
  kOk: 0,
  kError: 1,
  kItemAlreadyOwned: 2,
  kItemNotOwned: 3,
  kItemUnavailable: 4,
  kClientAppUnavailable: 5,
  kClientAppError: 6,
};

// Enum: ItemType
payments.mojom.ItemType = {
  kUnknown: 0,
  kProduct: 1,
  kSubscription: 2,
};

// Enum: CreateDigitalGoodsResponseCode
payments.mojom.CreateDigitalGoodsResponseCode = {
  kOk: 0,
  kError: 1,
  kUnsupportedPaymentMethod: 2,
  kUnsupportedContext: 3,
};

// Struct: ItemDetails
mojo.internal.Struct(
    payments.mojom.ItemDetailsSpec, 'payments.mojom.ItemDetails', [
      mojo.internal.StructField('item_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('price', 24, 0, payments.mojom.PaymentCurrencyAmountSpec, null, false, 0, undefined),
      mojo.internal.StructField('subscription_period', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('free_trial_period', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('introductory_price', 48, 0, payments.mojom.PaymentCurrencyAmountSpec, null, true, 0, undefined),
      mojo.internal.StructField('introductory_price_period', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('introductory_price_cycles', 72, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('type', 76, 0, payments.mojom.ItemTypeSpec, null, false, 1, undefined),
      mojo.internal.StructField('icon_urls', 64, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, true, 1, undefined),
    ],
    [[0, 72], [1, 88]]);

// Struct: PurchaseReference
mojo.internal.Struct(
    payments.mojom.PurchaseReferenceSpec, 'payments.mojom.PurchaseReference', [
      mojo.internal.StructField('item_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purchase_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
