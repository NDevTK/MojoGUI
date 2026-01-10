// Auto-generated MojoJS binding
// Source: chromium_src/components/digital_goods/mojom/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var url = url || {};


// Enum: BillingResponseCode
payments.mojom.mojom.BillingResponseCode = {
  kOk: 0,
  kItemAlreadyOwned: 1,
  kItemNotOwned: 2,
  kItemUnavailable: 3,
  kClientAppUnavailable: 4,
  kClientAppError: 5,
};
payments.mojom.mojom.BillingResponseCodeSpec = { $: mojo.internal.Enum() };

// Enum: ItemType
payments.mojom.mojom.ItemType = {
  kProduct: 0,
  kSubscription: 1,
};
payments.mojom.mojom.ItemTypeSpec = { $: mojo.internal.Enum() };

// Enum: CreateDigitalGoodsResponseCode
payments.mojom.mojom.CreateDigitalGoodsResponseCode = {
  kOk: 0,
  kUnsupportedPaymentMethod: 1,
  kUnsupportedContext: 2,
};
payments.mojom.mojom.CreateDigitalGoodsResponseCodeSpec = { $: mojo.internal.Enum() };

// Struct: ItemDetails
payments.mojom.mojom.ItemDetailsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.ItemDetails',
      packedSize: 88,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'price', packedOffset: 24, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false, minVersion: 0 },
        { name: 'subscription_period', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'free_trial_period', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'introductory_price', packedOffset: 48, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: true, minVersion: 0 },
        { name: 'introductory_price_period', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'introductory_price_cycles', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 1 },
        { name: 'type', packedOffset: 76, packedBitOffset: 0, type: payments.mojom.ItemTypeSpec, nullable: false, minVersion: 1 },
        { name: 'icon_urls', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 72}, {version: 1, packedSize: 88}]
    }
  }
};

// Struct: PurchaseReference
payments.mojom.mojom.PurchaseReferenceSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PurchaseReference',
      packedSize: 24,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'purchase_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
