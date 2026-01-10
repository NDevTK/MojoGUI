// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mdns_responder.mojom
// Module: network.mojom

'use strict';

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
};

network.mojom.MdnsResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNameForAddress(address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec,
      network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec,
      [address],
      false);
  }

  removeNameForAddress(address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

network.mojom.MdnsResponderReceiver = network.mojom.MdnsResponderReceiver;

network.mojom.MdnsResponderPtr = network.mojom.MdnsResponderRemote;
network.mojom.MdnsResponderRequest = network.mojom.MdnsResponderPendingReceiver;

