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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SharedWorkerConnector_Connect_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.info, params.client, params.creation_context_type, params.message_port, params.blob_url_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SharedWorkerConnectorReceiver = blink.mojom.SharedWorkerConnectorReceiver;

blink.mojom.SharedWorkerConnectorPtr = blink.mojom.SharedWorkerConnectorRemote;
blink.mojom.SharedWorkerConnectorRequest = blink.mojom.SharedWorkerConnectorPendingReceiver;

