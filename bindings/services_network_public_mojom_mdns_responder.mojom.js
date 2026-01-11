// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mdns_responder.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.MdnsResponder = {};
network.mojom.MdnsResponder.$interfaceName = 'network.mojom.MdnsResponder';
network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec = { $: {} };
network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec = { $: {} };
network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec = { $: {} };
network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec = { $: {} };

// Interface: MdnsResponder
mojo.internal.Struct(
    network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec, 'network.mojom.MdnsResponder_CreateNameForAddress_Params', [
      mojo.internal.StructField('address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec, 'network.mojom.MdnsResponder_CreateNameForAddress_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('announcement_scheduled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec, 'network.mojom.MdnsResponder_RemoveNameForAddress_Params', [
      mojo.internal.StructField('address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec, 'network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParams', [
      mojo.internal.StructField('removed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('goodbye_scheduled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.MdnsResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.MdnsResponderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.MdnsResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.MdnsResponderPendingReceiver,
      handle);
    this.$ = new network.mojom.MdnsResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createNameForAddress(address) {
    return this.$.createNameForAddress(address);
  }
  removeNameForAddress(address) {
    return this.$.removeNameForAddress(address);
  }
};

network.mojom.MdnsResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MdnsResponder', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createNameForAddress(address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec,
      network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec,
      [address],
      false);
  }

  removeNameForAddress(address) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec,
      network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec,
      [address],
      false);
  }

};

network.mojom.MdnsResponder.getRemote = function() {
  let remote = new network.mojom.MdnsResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.MdnsResponder',
    'context');
  return remote.$;
};

network.mojom.MdnsResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MdnsResponder', [
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
             decoder.decodeStructInline(network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec.$.structSpec);
          const result = this.impl.createNameForAddress(params.address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec.$.structSpec);
          const result = this.impl.removeNameForAddress(params.address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec);
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

network.mojom.MdnsResponderReceiver = network.mojom.MdnsResponderReceiver;

network.mojom.MdnsResponderPtr = network.mojom.MdnsResponderRemote;
network.mojom.MdnsResponderRequest = network.mojom.MdnsResponderPendingReceiver;

