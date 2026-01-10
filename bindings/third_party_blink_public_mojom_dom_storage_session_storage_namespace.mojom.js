// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SessionStorageNamespace = {};
blink.mojom.SessionStorageNamespace.$interfaceName = 'blink.mojom.SessionStorageNamespace';
blink.mojom.SessionStorageNamespace_Clone_ParamsSpec = { $: {} };

// Interface: SessionStorageNamespace
mojo.internal.Struct(
    blink.mojom.SessionStorageNamespace_Clone_ParamsSpec, 'blink.mojom.SessionStorageNamespace_Clone_Params', [
      mojo.internal.StructField('clone_to_namespace', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SessionStorageNamespacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SessionStorageNamespaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SessionStorageNamespace';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SessionStorageNamespacePendingReceiver,
      handle);
    this.$ = new blink.mojom.SessionStorageNamespaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SessionStorageNamespaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(clone_to_namespace) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SessionStorageNamespace_Clone_ParamsSpec,
      null,
      [clone_to_namespace],
      false);
  }

};

blink.mojom.SessionStorageNamespace.getRemote = function() {
  let remote = new blink.mojom.SessionStorageNamespaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SessionStorageNamespace',
    'context');
  return remote.$;
};

blink.mojom.SessionStorageNamespaceReceiver = class {
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
          const params = blink.mojom.SessionStorageNamespace_Clone_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.clone_to_namespace);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SessionStorageNamespaceReceiver = blink.mojom.SessionStorageNamespaceReceiver;

blink.mojom.SessionStorageNamespacePtr = blink.mojom.SessionStorageNamespaceRemote;
blink.mojom.SessionStorageNamespaceRequest = blink.mojom.SessionStorageNamespacePendingReceiver;

