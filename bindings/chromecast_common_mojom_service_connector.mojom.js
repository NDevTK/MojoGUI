// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/service_connector.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ServiceConnector
chromecast.mojom.mojom.ServiceConnector = {};

chromecast.mojom.mojom.ServiceConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.ServiceConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ServiceConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.ServiceConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.ServiceConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.ServiceConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(service_name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.ServiceConnector_Connect_ParamsSpec,
      null,
      [service_name, receiver]);
  }

};

chromecast.mojom.mojom.ServiceConnector.getRemote = function() {
  let remote = new chromecast.mojom.mojom.ServiceConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ServiceConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
chromecast.mojom.mojom.ServiceConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ServiceConnector.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.ServiceConnectorPtr = chromecast.mojom.mojom.ServiceConnectorRemote;
chromecast.mojom.mojom.ServiceConnectorRequest = chromecast.mojom.mojom.ServiceConnectorPendingReceiver;

