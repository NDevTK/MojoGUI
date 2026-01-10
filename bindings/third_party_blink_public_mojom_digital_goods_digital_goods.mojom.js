// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/digital_goods/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Interface: DigitalGoods
payments.mojom.DigitalGoods = {};

payments.mojom.DigitalGoodsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.DigitalGoodsRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.DigitalGoods';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.DigitalGoodsPendingReceiver,
      handle);
    this.$ = new payments.mojom.DigitalGoodsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.DigitalGoodsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDetails(item_ids) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.DigitalGoods_GetDetails_ParamsSpec,
      payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec,
      [item_ids]);
  }

  listPurchases() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.DigitalGoods_ListPurchases_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec,
      []);
  }

  listPurchaseHistory() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec,
      []);
  }

  consume(purchase_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.DigitalGoods_Consume_ParamsSpec,
      payments.mojom.DigitalGoods_Consume_ResponseParamsSpec,
      [purchase_token]);
  }

};

payments.mojom.DigitalGoods.getRemote = function() {
  let remote = new payments.mojom.DigitalGoodsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.DigitalGoods',
    'context');
  return remote.$;
};

// ParamsSpec for GetDetails
payments.mojom.DigitalGoods_GetDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.GetDetails_Params',
      packedSize: 16,
      fields: [
        { name: 'item_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.GetDetails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'item_details_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.ItemDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ListPurchases
payments.mojom.DigitalGoods_ListPurchases_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.ListPurchases_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.ListPurchases_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'purchase_reference_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PurchaseReferenceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ListPurchaseHistory
payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.ListPurchaseHistory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.ListPurchaseHistory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'purchase_reference_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.PurchaseReferenceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Consume
payments.mojom.DigitalGoods_Consume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.Consume_Params',
      packedSize: 16,
      fields: [
        { name: 'purchase_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

payments.mojom.DigitalGoods_Consume_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoods.Consume_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.mojom.DigitalGoodsPtr = payments.mojom.DigitalGoodsRemote;
payments.mojom.DigitalGoodsRequest = payments.mojom.DigitalGoodsPendingReceiver;


// Interface: DigitalGoodsFactory
payments.mojom.DigitalGoodsFactory = {};

payments.mojom.DigitalGoodsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.DigitalGoodsFactoryRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.DigitalGoodsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.DigitalGoodsFactoryPendingReceiver,
      handle);
    this.$ = new payments.mojom.DigitalGoodsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.DigitalGoodsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDigitalGoods(payment_method) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec,
      payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParamsSpec,
      [payment_method]);
  }

};

payments.mojom.DigitalGoodsFactory.getRemote = function() {
  let remote = new payments.mojom.DigitalGoodsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.DigitalGoodsFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateDigitalGoods
payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoodsFactory.CreateDigitalGoods_Params',
      packedSize: 16,
      fields: [
        { name: 'payment_method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.DigitalGoodsFactory.CreateDigitalGoods_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.CreateDigitalGoodsResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'digital_goods', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.mojom.DigitalGoodsFactoryPtr = payments.mojom.DigitalGoodsFactoryRemote;
payments.mojom.DigitalGoodsFactoryRequest = payments.mojom.DigitalGoodsFactoryPendingReceiver;

