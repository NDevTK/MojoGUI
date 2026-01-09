// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webtransport/web_transport_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebTransportConnector
blink.mojom.WebTransportConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebTransportConnector';
  }

  connect(url, fingerprints, application_protocols, client) {
    // Method: Connect
    // Call: Connect(url, fingerprints, application_protocols, client)
  }

};

blink.mojom.WebTransportConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
