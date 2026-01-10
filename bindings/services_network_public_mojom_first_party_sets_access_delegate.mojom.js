// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets_access_delegate.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: FirstPartySetsAccessDelegateParams
network.mojom.mojom.FirstPartySetsAccessDelegateParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsAccessDelegateParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FirstPartySetsReadyEvent
network.mojom.mojom.FirstPartySetsReadyEventSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsReadyEvent',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: network.mojom.FirstPartySetsContextConfigSpec, nullable: false, minVersion: 0 },
        { name: 'cache_filter', packedOffset: 8, packedBitOffset: 0, type: network.mojom.FirstPartySetsCacheFilterSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: FirstPartySetsAccessDelegate
network.mojom.mojom.FirstPartySetsAccessDelegate = {};

network.mojom.mojom.FirstPartySetsAccessDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.FirstPartySetsAccessDelegateRemote = class {
  static get $interfaceName() {
    return 'network.mojom.FirstPartySetsAccessDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.FirstPartySetsAccessDelegatePendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.FirstPartySetsAccessDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.FirstPartySetsAccessDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyReady(ready_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec,
      null,
      [ready_event]);
  }

  setEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec,
      null,
      [enabled]);
  }

};

network.mojom.mojom.FirstPartySetsAccessDelegate.getRemote = function() {
  let remote = new network.mojom.mojom.FirstPartySetsAccessDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.FirstPartySetsAccessDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyReady
network.mojom.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsAccessDelegate.NotifyReady_Params',
      packedSize: 16,
      fields: [
        { name: 'ready_event', packedOffset: 0, packedBitOffset: 0, type: network.mojom.FirstPartySetsReadyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetEnabled
network.mojom.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FirstPartySetsAccessDelegate.SetEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.FirstPartySetsAccessDelegatePtr = network.mojom.mojom.FirstPartySetsAccessDelegateRemote;
network.mojom.mojom.FirstPartySetsAccessDelegateRequest = network.mojom.mojom.FirstPartySetsAccessDelegatePendingReceiver;

