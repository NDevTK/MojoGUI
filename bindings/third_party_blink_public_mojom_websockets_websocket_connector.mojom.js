// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/websockets/websocket_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebSocketConnector
blink.mojom.WebSocketConnector = {};

blink.mojom.WebSocketConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebSocketConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebSocketConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebSocketConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebSocketConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebSocketConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebSocketConnector_Connect_ParamsSpec,
      null,
      null,
      [url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id],
      undefined,
      undefined
    );
  }

};

blink.mojom.WebSocketConnector.getRemote = function() {
  let remote = new blink.mojom.WebSocketConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebSocketConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
blink.mojom.WebSocketConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebSocketConnector.Connect_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'requested_protocols', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'user_agent', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'storage_access_api_status', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'handshake_client', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'throttling_profile_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebSocketConnectorPtr = blink.mojom.WebSocketConnectorRemote;
blink.mojom.WebSocketConnectorRequest = blink.mojom.WebSocketConnectorPendingReceiver;

