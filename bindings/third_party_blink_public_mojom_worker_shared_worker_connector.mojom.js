// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerConnector
blink.mojom.SharedWorkerConnector = {};

blink.mojom.SharedWorkerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedWorkerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(info, client, creation_context_type, message_port, blob_url_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorkerConnector_Connect_ParamsSpec.$,
      null,
      [info, client, creation_context_type, message_port, blob_url_token]);
  }

};

blink.mojom.SharedWorkerConnector.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
blink.mojom.SharedWorkerConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerConnector.Connect_Params',
      packedSize: 48,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'creation_context_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message_port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blob_url_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerConnectorPtr = blink.mojom.SharedWorkerConnectorRemote;
blink.mojom.SharedWorkerConnectorRequest = blink.mojom.SharedWorkerConnectorPendingReceiver;

