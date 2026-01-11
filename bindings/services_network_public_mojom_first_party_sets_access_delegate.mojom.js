// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets_access_delegate.mojom
// Module: network.mojom

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
  notifyReady(ready_event) {
    return this.$.notifyReady(ready_event);
  }
  setEnabled(enabled) {
    return this.$.setEnabled(enabled);
  }
};

network.mojom.FirstPartySetsAccessDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FirstPartySetsAccessDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyReady(ready_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec,
      null,
      [ready_event],
      false);
  }

  setEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FirstPartySetsAccessDelegate', [
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
             decoder.decodeStructInline(network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec.$.structSpec);
          const result = this.impl.notifyReady(params.ready_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setEnabled(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.FirstPartySetsAccessDelegateReceiver = network.mojom.FirstPartySetsAccessDelegateReceiver;

network.mojom.FirstPartySetsAccessDelegatePtr = network.mojom.FirstPartySetsAccessDelegateRemote;
network.mojom.FirstPartySetsAccessDelegateRequest = network.mojom.FirstPartySetsAccessDelegatePendingReceiver;

