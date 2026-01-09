// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: IceConfigFetcher
sharing.mojom.IceConfigFetcher = {};

sharing.mojom.IceConfigFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.IceConfigFetcherRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IceConfigFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.IceConfigFetcherPendingReceiver,
      handle);
    this.$ = new sharing.mojom.IceConfigFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.IceConfigFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIceServers() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec,
      sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec,
      []);
  }

};

sharing.mojom.IceConfigFetcher.getRemote = function() {
  let remote = new sharing.mojom.IceConfigFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IceConfigFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for GetIceServers
sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceConfigFetcher.GetIceServers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IceConfigFetcher.GetIceServers_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ice_servers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.IceConfigFetcherPtr = sharing.mojom.IceConfigFetcherRemote;
sharing.mojom.IceConfigFetcherRequest = sharing.mojom.IceConfigFetcherPendingReceiver;


// Interface: MdnsResponderFactory
sharing.mojom.MdnsResponderFactory = {};

sharing.mojom.MdnsResponderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsResponderFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsResponderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsResponderFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsResponderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsResponderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver]);
  }

};

sharing.mojom.MdnsResponderFactory.getRemote = function() {
  let remote = new sharing.mojom.MdnsResponderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsResponderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateMdnsResponder
sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.MdnsResponderFactory.CreateMdnsResponder_Params',
      packedSize: 16,
      fields: [
        { name: 'responder_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.MdnsResponderFactoryPtr = sharing.mojom.MdnsResponderFactoryRemote;
sharing.mojom.MdnsResponderFactoryRequest = sharing.mojom.MdnsResponderFactoryPendingReceiver;

