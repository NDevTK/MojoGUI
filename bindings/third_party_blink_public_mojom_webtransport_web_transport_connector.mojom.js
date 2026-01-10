// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webtransport/web_transport_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var url = url || {};

blink.mojom.WebTransportConnector = {};
blink.mojom.WebTransportConnector.$interfaceName = 'blink.mojom.WebTransportConnector';
blink.mojom.WebTransportConnector_Connect_ParamsSpec = { $: {} };

// Interface: WebTransportConnector
mojo.internal.Struct(
    blink.mojom.WebTransportConnector_Connect_ParamsSpec, 'blink.mojom.WebTransportConnector_Connect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('fingerprints', 8, 0, mojo.internal.Array(network.mojom.WebTransportCertificateFingerprintSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('application_protocols', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.WebTransportHandshakeClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.WebTransportConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebTransportConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebTransportConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebTransportConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebTransportConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebTransportConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, fingerprints, application_protocols, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebTransportConnector_Connect_ParamsSpec,
      null,
      [url, fingerprints, application_protocols, client]);
  }

};

blink.mojom.WebTransportConnector.getRemote = function() {
  let remote = new blink.mojom.WebTransportConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebTransportConnector',
    'context');
  return remote.$;
};

blink.mojom.WebTransportConnectorPtr = blink.mojom.WebTransportConnectorRemote;
blink.mojom.WebTransportConnectorRequest = blink.mojom.WebTransportConnectorPendingReceiver;

