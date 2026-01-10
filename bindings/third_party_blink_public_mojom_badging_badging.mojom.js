// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/badging/badging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Union: BadgeValue
blink.mojom.mojom.BadgeValueSpec = { $: mojo.internal.Union(
    'blink.mojom.BadgeValue', {
      'flag': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'number': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Interface: BadgeService
blink.mojom.mojom.BadgeService = {};

blink.mojom.mojom.BadgeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.BadgeServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BadgeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.BadgeServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.BadgeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.BadgeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setBadge(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.BadgeService_SetBadge_ParamsSpec,
      null,
      [value]);
  }

  clearBadge() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.BadgeService_ClearBadge_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.BadgeService.getRemote = function() {
  let remote = new blink.mojom.mojom.BadgeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BadgeService',
    'context');
  return remote.$;
};

// ParamsSpec for SetBadge
blink.mojom.mojom.BadgeService_SetBadge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BadgeService.SetBadge_Params',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BadgeValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearBadge
blink.mojom.mojom.BadgeService_ClearBadge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BadgeService.ClearBadge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.BadgeServicePtr = blink.mojom.mojom.BadgeServiceRemote;
blink.mojom.mojom.BadgeServiceRequest = blink.mojom.mojom.BadgeServicePendingReceiver;

