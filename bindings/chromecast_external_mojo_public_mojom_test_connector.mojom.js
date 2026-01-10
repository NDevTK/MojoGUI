// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/test_connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.external_mojo.mojom = chromecast.external_mojo.external_mojo.mojom || {};


// Interface: TestExternalConnector
chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnector = {};

chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.TestExternalConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInterfaceInternal(service_name, interface_name, interface_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe]);
  }

};

chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnector.getRemote = function() {
  let remote = new chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.TestExternalConnector',
    'context');
  return remote.$;
};

// ParamsSpec for BindInterfaceInternal
chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.external_mojo.mojom.TestExternalConnector.BindInterfaceInternal_Params',
      packedSize: 32,
      fields: [
        { name: 'service_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorPtr = chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRemote;
chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorRequest = chromecast.external_mojo.external_mojo.mojom.mojom.TestExternalConnectorPendingReceiver;

