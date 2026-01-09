// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/digital_goods/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Interface: DigitalGoods
payments.mojom.DigitalGoodsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.DigitalGoods';
  }

  getDetails(item_ids) {
    // Method: GetDetails
    return new Promise((resolve) => {
      // Call: GetDetails(item_ids)
      resolve({});
    });
  }

  listPurchases() {
    // Method: ListPurchases
    return new Promise((resolve) => {
      // Call: ListPurchases()
      resolve({});
    });
  }

  listPurchaseHistory() {
    // Method: ListPurchaseHistory
    return new Promise((resolve) => {
      // Call: ListPurchaseHistory()
      resolve({});
    });
  }

  consume(purchase_token) {
    // Method: Consume
    return new Promise((resolve) => {
      // Call: Consume(purchase_token)
      resolve({});
    });
  }

};

payments.mojom.DigitalGoodsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DigitalGoodsFactory
payments.mojom.DigitalGoodsFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'payments.mojom.DigitalGoodsFactory';
  }

  createDigitalGoods(payment_method) {
    // Method: CreateDigitalGoods
    return new Promise((resolve) => {
      // Call: CreateDigitalGoods(payment_method)
      resolve({});
    });
  }

};

payments.mojom.DigitalGoodsFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
