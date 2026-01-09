// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/digital_goods.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: PurchaseState
arc.mojom.PurchaseState = {
  kUnknown: 0,
  kPurchased: 1,
  kPending: 2,
};

// Struct: PurchaseDetails
arc.mojom.PurchaseDetails = class {
  constructor(values = {}) {
    this.will_auto_renew = values.will_auto_renew !== undefined ? values.will_auto_renew : false;
  }
};

// Interface: DigitalGoodsInstance
arc.mojom.DigitalGoodsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.DigitalGoodsInstance';
  }

  0(package_name, scope, item_ids) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(package_name, scope, item_ids)
      resolve({});
    });
  }

  repeatable(item) {
    // Method: repeatable
    // Call: repeatable(item)
  }

  off(upgrade) {
    // Method: off
    // Call: off(upgrade)
  }

  1(package_name, scope, purchase_token, make_available_again) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(package_name, scope, purchase_token, make_available_again)
      resolve({});
    });
  }

  2(package_name, scope) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(package_name, scope)
      resolve({});
    });
  }

  3(package_name, scope) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(package_name, scope)
      resolve({});
    });
  }

  4(package_name, scope) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(package_name, scope)
      resolve({});
    });
  }

  5(package_name, scope, purchase_token) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(package_name, scope, purchase_token)
      resolve({});
    });
  }

};

arc.mojom.DigitalGoodsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
