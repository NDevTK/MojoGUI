// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/badging/badging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BadgeValueSpec = { $: {} };
blink.mojom.BadgeService = {};
blink.mojom.BadgeService.$interfaceName = 'blink.mojom.BadgeService';
blink.mojom.BadgeService_SetBadge_ParamsSpec = { $: {} };
blink.mojom.BadgeService_ClearBadge_ParamsSpec = { $: {} };

// Union: BadgeValue
mojo.internal.Union(
    blink.mojom.BadgeValueSpec, 'blink.mojom.BadgeValue', {
      'flag': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'number': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Interface: BadgeService
mojo.internal.Struct(
    blink.mojom.BadgeService_SetBadge_ParamsSpec, 'blink.mojom.BadgeService_SetBadge_Params', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.BadgeValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BadgeService_ClearBadge_ParamsSpec, 'blink.mojom.BadgeService_ClearBadge_Params', [
    ],
    [[0, 8]]);

blink.mojom.BadgeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BadgeServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BadgeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BadgeServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BadgeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BadgeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setBadge(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BadgeService_SetBadge_ParamsSpec,
      null,
      [value],
      false);
  }

  clearBadge() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BadgeService_ClearBadge_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.BadgeService.getRemote = function() {
  let remote = new blink.mojom.BadgeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BadgeService',
    'context');
  return remote.$;
};

blink.mojom.BadgeServiceReceiver = class {
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
          const params = blink.mojom.BadgeService_SetBadge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBadge(params.value);
          break;
        }
        case 1: {
          const params = blink.mojom.BadgeService_ClearBadge_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearBadge();
          break;
        }
      }
    }});
  }
};

blink.mojom.BadgeServiceReceiver = blink.mojom.BadgeServiceReceiver;

blink.mojom.BadgeServicePtr = blink.mojom.BadgeServiceRemote;
blink.mojom.BadgeServiceRequest = blink.mojom.BadgeServicePendingReceiver;

