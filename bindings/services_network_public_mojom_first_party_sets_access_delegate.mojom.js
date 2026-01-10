// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets_access_delegate.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.FirstPartySetsAccessDelegateParamsSpec = { $: {} };
network.mojom.FirstPartySetsReadyEventSpec = { $: {} };
network.mojom.FirstPartySetsAccessDelegate = {};
network.mojom.FirstPartySetsAccessDelegate.$interfaceName = 'network.mojom.FirstPartySetsAccessDelegate';
network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec = { $: {} };
network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec = { $: {} };

// Struct: FirstPartySetsAccessDelegateParams
mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegateParamsSpec, 'network.mojom.FirstPartySetsAccessDelegateParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FirstPartySetsReadyEvent
mojo.internal.Struct(
    network.mojom.FirstPartySetsReadyEventSpec, 'network.mojom.FirstPartySetsReadyEvent', [
      mojo.internal.StructField('config', 0, 0, network.mojom.FirstPartySetsContextConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_filter', 8, 0, network.mojom.FirstPartySetsCacheFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FirstPartySetsAccessDelegate
mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec, 'network.mojom.FirstPartySetsAccessDelegate_NotifyReady_Params', [
      mojo.internal.StructField('ready_event', 0, 0, network.mojom.FirstPartySetsReadyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec, 'network.mojom.FirstPartySetsAccessDelegate_SetEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.FirstPartySetsAccessDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.FirstPartySetsAccessDelegateRemote = class {
  static get $interfaceName() {
    return 'network.mojom.FirstPartySetsAccessDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.FirstPartySetsAccessDelegatePendingReceiver,
      handle);
    this.$ = new network.mojom.FirstPartySetsAccessDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.FirstPartySetsAccessDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyReady(ready_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec,
      null,
      [ready_event],
      false);
  }

  setEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

network.mojom.FirstPartySetsAccessDelegate.getRemote = function() {
  let remote = new network.mojom.FirstPartySetsAccessDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.FirstPartySetsAccessDelegate',
    'context');
  return remote.$;
};

network.mojom.FirstPartySetsAccessDelegateReceiver = class {
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
          const params = network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyReady(params.ready_event);
          break;
        }
        case 1: {
          const params = network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnabled(params.enabled);
          break;
        }
      }
    }});
  }
};

network.mojom.FirstPartySetsAccessDelegateReceiver = network.mojom.FirstPartySetsAccessDelegateReceiver;

network.mojom.FirstPartySetsAccessDelegatePtr = network.mojom.FirstPartySetsAccessDelegateRemote;
network.mojom.FirstPartySetsAccessDelegateRequest = network.mojom.FirstPartySetsAccessDelegatePendingReceiver;

