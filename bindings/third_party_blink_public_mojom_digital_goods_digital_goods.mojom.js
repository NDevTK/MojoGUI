// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/digital_goods/digital_goods.mojom
// Module: payments.mojom

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
  getDetails(item_ids) {
    return this.$.getDetails(item_ids);
  }
  listPurchases() {
    return this.$.listPurchases();
  }
  listPurchaseHistory() {
    return this.$.listPurchaseHistory();
  }
  consume(purchase_token) {
    return this.$.consume(purchase_token);
  }
};

payments.mojom.DigitalGoodsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DigitalGoods', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDetails(item_ids) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.DigitalGoods_GetDetails_ParamsSpec,
      payments.mojom.DigitalGoods_GetDetails_ResponseParamsSpec,
      [item_ids],
      false);
  }

  listPurchases() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.DigitalGoods_ListPurchases_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchases_ResponseParamsSpec,
      [],
      false);
  }

  listPurchaseHistory() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec,
      payments.mojom.DigitalGoods_ListPurchaseHistory_ResponseParamsSpec,
      [],
      false);
  }

  consume(purchase_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DigitalGoods', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.DigitalGoods_GetDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.DigitalGoods_ListPurchases_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.DigitalGoods_Consume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.DigitalGoods_GetDetails_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.DigitalGoods_ListPurchases_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.DigitalGoods_ListPurchaseHistory_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.DigitalGoods_Consume_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      mojo.internal.StructField('digital_goods', 8, 0, mojo.internal.InterfaceProxy(payments.mojom.DigitalGoodsRemote), null, true, 0, undefined),
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
  createDigitalGoods(payment_method) {
    return this.$.createDigitalGoods(payment_method);
  }
};

payments.mojom.DigitalGoodsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DigitalGoodsFactory', [
      { explicit: null },
    ]);
  }

  createDigitalGoods(payment_method) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DigitalGoodsFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.DigitalGoodsFactory_CreateDigitalGoods_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

payments.mojom.DigitalGoodsFactoryReceiver = payments.mojom.DigitalGoodsFactoryReceiver;

payments.mojom.DigitalGoodsFactoryPtr = payments.mojom.DigitalGoodsFactoryRemote;
payments.mojom.DigitalGoodsFactoryRequest = payments.mojom.DigitalGoodsFactoryPendingReceiver;

