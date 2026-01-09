// Auto-generated MojoJS binding
// Source: chromium_src/components/digital_goods/mojom/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Enum: BillingResponseCode
payments.mojom.BillingResponseCode = {
  kOk: 0,
  kItemAlreadyOwned: 1,
  kItemNotOwned: 2,
  kItemUnavailable: 3,
  kClientAppUnavailable: 4,
  kClientAppError: 5,
};

// Enum: ItemType
payments.mojom.ItemType = {
  kProduct: 0,
  kSubscription: 1,
};

// Enum: CreateDigitalGoodsResponseCode
payments.mojom.CreateDigitalGoodsResponseCode = {
  kOk: 0,
  kUnsupportedPaymentMethod: 1,
  kUnsupportedContext: 2,
};

// Struct: ItemDetails
payments.mojom.ItemDetailsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.ItemDetails',
      packedSize: 72,
      fields: [
        { name: 'item_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'price', packedOffset: 32, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false },
        { name: 'subscription_period', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'free_trial_period', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'introductory_price', packedOffset: 56, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: true },
        { name: 'introductory_price_period', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PurchaseReference
payments.mojom.PurchaseReferenceSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PurchaseReference',
      packedSize: 24,
      fields: [
        { name: 'item_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'purchase_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
