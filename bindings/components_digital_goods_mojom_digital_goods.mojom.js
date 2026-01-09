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
      packedSize: 16,
      fields: [
        { name: 'icon_urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'purchase_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
