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
arc.mojom.PurchaseDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PurchaseDetails',
      packedSize: 56,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'purchase_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'acknowledged', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'purchase_state', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.PurchaseStateSpec, nullable: false },
        { name: 'purchase_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'will_auto_renew', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.DigitalGoodsInstancePtr = arc.mojom.DigitalGoodsInstanceRemote;
arc.mojom.DigitalGoodsInstanceRequest = arc.mojom.DigitalGoodsInstancePendingReceiver;

