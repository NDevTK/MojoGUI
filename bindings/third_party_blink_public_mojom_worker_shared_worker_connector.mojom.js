// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_connector.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SharedWorkerConnector = {};
blink.mojom.SharedWorkerConnector.$interfaceName = 'blink.mojom.SharedWorkerConnector';
blink.mojom.SharedWorkerConnector_Connect_ParamsSpec = { $: {} };

// Interface: SharedWorkerConnector
mojo.internal.Struct(
    blink.mojom.SharedWorkerConnector_Connect_ParamsSpec, 'blink.mojom.SharedWorkerConnector_Connect_Params', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.SharedWorkerInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedWorkerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('creation_context_type', 16, 0, blink.mojom.SharedWorkerCreationContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message_port', 24, 0, blink.mojom.MessagePortDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

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
      blink.mojom.SharedWorkerConnector_Connect_ParamsSpec,
      null,
      [info, client, creation_context_type, message_port, blob_url_token],
      false);
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

blink.mojom.SharedWorkerConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SharedWorkerConnector_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.info, params.client, params.creation_context_type, params.message_port, params.blob_url_token);
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.SharedWorkerConnectorReceiver = blink.mojom.SharedWorkerConnectorReceiver;

blink.mojom.SharedWorkerConnectorPtr = blink.mojom.SharedWorkerConnectorRemote;
blink.mojom.SharedWorkerConnectorRequest = blink.mojom.SharedWorkerConnectorPendingReceiver;

