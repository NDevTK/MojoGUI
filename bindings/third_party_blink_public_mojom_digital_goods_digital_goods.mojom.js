// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/digital_goods/digital_goods.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};

payments.mojom.DigitalGoods = {};
payments.mojom.DigitalGoods.$interfaceName = 'payments.mojom.DigitalGoods';
payments.mojom.DigitalGoods_GetDetails_ParamsSpec = { $: {} };
payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec = { $: {} };
payments.mojom.DigitalGoods_ListPurchases_ParamsSpec = { $: {} };
payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec = { $: {} };
payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec = { $: {} };
payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec = { $: {} };
payments.mojom.DigitalGoods_Consume_ParamsSpec = { $: {} };
payments.mojom.DigitalGoods_Consume_ResponseParamsSpec = { $: {} };
payments.mojom.DigitalGoodsFactory = {};
payments.mojom.DigitalGoodsFactory.$interfaceName = 'payments.mojom.DigitalGoodsFactory';
payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec = { $: {} };
payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParamsSpec = { $: {} };

// Interface: DigitalGoods
mojo.internal.Struct(
    payments.mojom.DigitalGoods_GetDetails_ParamsSpec, 'payments.mojom.DigitalGoods_GetDetails_Params', [
      mojo.internal.StructField('item_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec, 'payments.mojom.DigitalGoods_GetDetails_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('item_details_list', 8, 0, mojo.internal.Array(payments.mojom.ItemDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_ListPurchases_ParamsSpec, 'payments.mojom.DigitalGoods_ListPurchases_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec, 'payments.mojom.DigitalGoods_ListPurchases_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_reference_list', 8, 0, mojo.internal.Array(payments.mojom.PurchaseReferenceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec, 'payments.mojom.DigitalGoods_ListPurchaseHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec, 'payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_reference_list', 8, 0, mojo.internal.Array(payments.mojom.PurchaseReferenceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_Consume_ParamsSpec, 'payments.mojom.DigitalGoods_Consume_Params', [
      mojo.internal.StructField('purchase_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoods_Consume_ResponseParamsSpec, 'payments.mojom.DigitalGoods_Consume_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [item_ids],
      false);
  }

  listPurchases() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.DigitalGoods_ListPurchases_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec,
      [],
      false);
  }

  listPurchaseHistory() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec,
      [],
      false);
  }

  consume(purchase_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      payments.mojom.DigitalGoods_Consume_ParamsSpec,
      payments.mojom.DigitalGoods_Consume_ResponseParamsSpec,
      [purchase_token],
      false);
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

payments.mojom.DigitalGoodsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = payments.mojom.DigitalGoods_GetDetails_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDetails(params.item_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = payments.mojom.DigitalGoods_ListPurchases_ParamsSpec.$.decode(message.payload);
          const result = this.impl.listPurchases();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.listPurchaseHistory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = payments.mojom.DigitalGoods_Consume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.consume(params.purchase_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.DigitalGoods_Consume_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

payments.mojom.DigitalGoodsReceiver = payments.mojom.DigitalGoodsReceiver;

payments.mojom.DigitalGoodsPtr = payments.mojom.DigitalGoodsRemote;
payments.mojom.DigitalGoodsRequest = payments.mojom.DigitalGoodsPendingReceiver;


// Interface: DigitalGoodsFactory
mojo.internal.Struct(
    payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec, 'payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_Params', [
      mojo.internal.StructField('payment_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParamsSpec, 'payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.CreateDigitalGoodsResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('digital_goods', 8, 0, mojo.internal.InterfaceProxy(payments.mojom.DigitalGoodsSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [payment_method],
      false);
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

payments.mojom.DigitalGoodsFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDigitalGoods(params.payment_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

payments.mojom.DigitalGoodsFactoryReceiver = payments.mojom.DigitalGoodsFactoryReceiver;

payments.mojom.DigitalGoodsFactoryPtr = payments.mojom.DigitalGoodsFactoryRemote;
payments.mojom.DigitalGoodsFactoryRequest = payments.mojom.DigitalGoodsFactoryPendingReceiver;

