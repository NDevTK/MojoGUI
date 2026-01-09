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

};

arc.mojom.DigitalGoodsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
