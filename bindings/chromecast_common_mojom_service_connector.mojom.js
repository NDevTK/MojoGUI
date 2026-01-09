// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/service_connector.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ServiceConnector
chromecast.mojom.ServiceConnector = {};

chromecast.mojom.ServiceConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ServiceConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ServiceConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ServiceConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ServiceConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ServiceConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(service_name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ServiceConnector_Connect_ParamsSpec,
      null,
      [service_name, receiver]);
  }

};

chromecast.mojom.ServiceConnector.getRemote = function() {
  let remote = new chromecast.mojom.ServiceConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ServiceConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
chromecast.mojom.ServiceConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ServiceConnector.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.ServiceConnectorPtr = chromecast.mojom.ServiceConnectorRemote;
chromecast.mojom.ServiceConnectorRequest = chromecast.mojom.ServiceConnectorPendingReceiver;

