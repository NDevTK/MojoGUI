// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/websockets/websocket_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebSocketConnector
blink.mojom.WebSocketConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebSocketConnector';
  }

  connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id) {
    // Method: Connect
    // Call: Connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id)
  }

};

blink.mojom.WebSocketConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
