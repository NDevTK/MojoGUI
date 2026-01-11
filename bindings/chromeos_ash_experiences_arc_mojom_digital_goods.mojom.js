// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/digital_goods.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var payments = payments || {};
var mojo_base = mojo_base || {};

arc.mojom.PurchaseStateSpec = { $: mojo.internal.Enum() };
arc.mojom.PurchaseDetailsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance = {};
arc.mojom.DigitalGoodsInstance.$interfaceName = 'arc.mojom.DigitalGoodsInstance';
arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec = { $: {} };
arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec = { $: {} };

// Enum: PurchaseState
arc.mojom.PurchaseState = {
  kUnknown: 0,
  kPurchased: 1,
  kPending: 2,
};

// Struct: PurchaseDetails
mojo.internal.Struct(
    arc.mojom.PurchaseDetailsSpec, 'arc.mojom.PurchaseDetails', [
      mojo.internal.StructField('item_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purchase_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purchase_state', 16, 0, arc.mojom.PurchaseStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_time', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('acknowledged', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('will_auto_renew', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: DigitalGoodsInstance
mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_GetDetails_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('item_ids', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('item_details_list', 8, 0, mojo.internal.Array(payments.mojom.ItemDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_Acknowledge_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purchase_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('make_available_again', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_details_list', 8, 0, mojo.internal.Array(arc.mojom.PurchaseDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_ListPurchases_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_reference_list', 8, 0, mojo.internal.Array(payments.mojom.PurchaseReferenceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purchase_reference_list', 8, 0, mojo.internal.Array(payments.mojom.PurchaseReferenceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec, 'arc.mojom.DigitalGoodsInstance_Consume_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('purchase_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec, 'arc.mojom.DigitalGoodsInstance_Consume_ResponseParams', [
      mojo.internal.StructField('code', 0, 0, payments.mojom.BillingResponseCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.DigitalGoodsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.DigitalGoodsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DigitalGoodsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.DigitalGoodsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.DigitalGoodsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDetails(package_name, scope, item_ids) {
    return this.$.getDetails(package_name, scope, item_ids);
  }
  acknowledge(package_name, scope, purchase_token, make_available_again) {
    return this.$.acknowledge(package_name, scope, purchase_token, make_available_again);
  }
  deprecatedListPurchases(package_name, scope) {
    return this.$.deprecatedListPurchases(package_name, scope);
  }
  listPurchases(package_name, scope) {
    return this.$.listPurchases(package_name, scope);
  }
  listPurchaseHistory(package_name, scope) {
    return this.$.listPurchaseHistory(package_name, scope);
  }
  consume(package_name, scope, purchase_token) {
    return this.$.consume(package_name, scope, purchase_token);
  }
};

arc.mojom.DigitalGoodsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DigitalGoodsInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  getDetails(package_name, scope, item_ids) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec,
      [package_name, scope, item_ids],
      false);
  }

  acknowledge(package_name, scope, purchase_token, make_available_again) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec,
      [package_name, scope, purchase_token, make_available_again],
      false);
  }

  deprecatedListPurchases(package_name, scope) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec,
      [package_name, scope],
      false);
  }

  listPurchases(package_name, scope) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec,
      [package_name, scope],
      false);
  }

  listPurchaseHistory(package_name, scope) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec,
      [package_name, scope],
      false);
  }

  consume(package_name, scope, purchase_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec,
      [package_name, scope, purchase_token],
      false);
  }

};

arc.mojom.DigitalGoodsInstance.getRemote = function() {
  let remote = new arc.mojom.DigitalGoodsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DigitalGoodsInstance',
    'context');
  return remote.$;
};

arc.mojom.DigitalGoodsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DigitalGoodsInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getDetails(params.package_name, params.scope, params.item_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec.$.structSpec);
          const result = this.impl.acknowledge(params.package_name, params.scope, params.purchase_token, params.make_available_again);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec.$.structSpec);
          const result = this.impl.deprecatedListPurchases(params.package_name, params.scope);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec.$.structSpec);
          const result = this.impl.listPurchases(params.package_name, params.scope);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec.$.structSpec);
          const result = this.impl.listPurchaseHistory(params.package_name, params.scope);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec.$.structSpec);
          const result = this.impl.consume(params.package_name, params.scope, params.purchase_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec);
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

arc.mojom.DigitalGoodsInstanceReceiver = arc.mojom.DigitalGoodsInstanceReceiver;

arc.mojom.DigitalGoodsInstancePtr = arc.mojom.DigitalGoodsInstanceRemote;
arc.mojom.DigitalGoodsInstanceRequest = arc.mojom.DigitalGoodsInstancePendingReceiver;

