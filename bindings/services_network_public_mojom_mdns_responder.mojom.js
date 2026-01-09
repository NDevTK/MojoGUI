// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mdns_responder.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: MdnsResponder
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
      network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec.$,
      network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec.$,
      [address]);
  }

  removeNameForAddress(address) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec.$,
      network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec.$,
      [address]);
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
}};

// ParamsSpec for CreateNameForAddress
network.mojom.MdnsResponder_CreateNameForAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsResponder.CreateNameForAddress_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.MdnsResponder_CreateNameForAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsResponder.CreateNameForAddress_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'announcement_scheduled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RemoveNameForAddress
network.mojom.MdnsResponder_RemoveNameForAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsResponder.RemoveNameForAddress_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

network.mojom.MdnsResponder_RemoveNameForAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MdnsResponder.RemoveNameForAddress_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'removed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'goodbye_scheduled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.MdnsResponderPtr = network.mojom.MdnsResponderRemote;
network.mojom.MdnsResponderRequest = network.mojom.MdnsResponderPendingReceiver;

