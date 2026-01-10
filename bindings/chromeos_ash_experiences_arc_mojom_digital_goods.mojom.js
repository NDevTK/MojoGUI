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
arc.mojom.PurchaseStateSpec = { $: mojo.internal.Enum() };

// Struct: PurchaseDetails
arc.mojom.PurchaseDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PurchaseDetails',
      packedSize: 40,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'purchase_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'acknowledged', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'purchase_state', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.PurchaseStateSpec, nullable: false, minVersion: 0 },
        { name: 'purchase_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'will_auto_renew', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: DigitalGoodsInstance
arc.mojom.DigitalGoodsInstance = {};

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
};

arc.mojom.DigitalGoodsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDetails(package_name, scope, item_ids) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec,
      [package_name, scope, item_ids]);
  }

  acknowledge(package_name, scope, purchase_token, make_available_again) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec,
      [package_name, scope, purchase_token, make_available_again]);
  }

  deprecatedListPurchases(package_name, scope) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec,
      [package_name, scope]);
  }

  listPurchases(package_name, scope) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec,
      [package_name, scope]);
  }

  listPurchaseHistory(package_name, scope) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec,
      [package_name, scope]);
  }

  consume(package_name, scope, purchase_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec,
      arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec,
      [package_name, scope, purchase_token]);
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

// ParamsSpec for GetDetails
arc.mojom.DigitalGoodsInstance_GetDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.GetDetails_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'item_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_GetDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.GetDetails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'item_details_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(payments.mojom.ItemDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Acknowledge
arc.mojom.DigitalGoodsInstance_Acknowledge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.Acknowledge_Params',
      packedSize: 40,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'purchase_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'make_available_again', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_Acknowledge_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.Acknowledge_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeprecatedListPurchases
arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.DeprecatedListPurchases_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_DeprecatedListPurchases_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.DeprecatedListPurchases_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
        { name: 'purchase_details_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PurchaseDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ListPurchases
arc.mojom.DigitalGoodsInstance_ListPurchases_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.ListPurchases_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_ListPurchases_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.ListPurchases_ResponseParams',
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
arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.ListPurchaseHistory_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_ListPurchaseHistory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.ListPurchaseHistory_ResponseParams',
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
arc.mojom.DigitalGoodsInstance_Consume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.Consume_Params',
      packedSize: 32,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'purchase_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.DigitalGoodsInstance_Consume_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DigitalGoodsInstance.Consume_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.BillingResponseCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.DigitalGoodsInstancePtr = arc.mojom.DigitalGoodsInstanceRemote;
arc.mojom.DigitalGoodsInstanceRequest = arc.mojom.DigitalGoodsInstancePendingReceiver;

