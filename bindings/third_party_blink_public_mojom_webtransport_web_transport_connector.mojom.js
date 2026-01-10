// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webtransport/web_transport_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Interface: WebTransportConnector
blink.mojom.mojom.WebTransportConnector = {};

blink.mojom.mojom.WebTransportConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebTransportConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebTransportConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebTransportConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebTransportConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebTransportConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, fingerprints, application_protocols, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebTransportConnector_Connect_ParamsSpec,
      null,
      [url, fingerprints, application_protocols, client]);
  }

};

blink.mojom.mojom.WebTransportConnector.getRemote = function() {
  let remote = new blink.mojom.mojom.WebTransportConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebTransportConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
blink.mojom.mojom.WebTransportConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebTransportConnector.Connect_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'fingerprints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebTransportCertificateFingerprintSpec, false), nullable: false, minVersion: 0 },
        { name: 'application_protocols', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebTransportConnectorPtr = blink.mojom.mojom.WebTransportConnectorRemote;
blink.mojom.mojom.WebTransportConnectorRequest = blink.mojom.mojom.WebTransportConnectorPendingReceiver;

