// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Interface: SharedWorkerConnector
blink.mojom.mojom.SharedWorkerConnector = {};

blink.mojom.mojom.SharedWorkerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SharedWorkerConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SharedWorkerConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SharedWorkerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SharedWorkerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(info, client, creation_context_type, message_port, blob_url_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SharedWorkerConnector_Connect_ParamsSpec,
      null,
      [info, client, creation_context_type, message_port, blob_url_token]);
  }

};

blink.mojom.mojom.SharedWorkerConnector.getRemote = function() {
  let remote = new blink.mojom.mojom.SharedWorkerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerConnector',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
blink.mojom.mojom.SharedWorkerConnector_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerConnector.Connect_Params',
      packedSize: 48,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SharedWorkerInfoSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.SharedWorkerClientRemote), nullable: false, minVersion: 0 },
        { name: 'creation_context_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SharedWorkerCreationContextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message_port', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MessagePortDescriptorSpec, nullable: false, minVersion: 0 },
        { name: 'blob_url_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SharedWorkerConnectorPtr = blink.mojom.mojom.SharedWorkerConnectorRemote;
blink.mojom.mojom.SharedWorkerConnectorRequest = blink.mojom.mojom.SharedWorkerConnectorPendingReceiver;

