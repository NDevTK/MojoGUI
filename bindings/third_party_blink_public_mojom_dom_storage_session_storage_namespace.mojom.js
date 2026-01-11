// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom
// Module: blink.mojom

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
  clone(clone_to_namespace) {
    return this.$.clone(clone_to_namespace);
  }
};

blink.mojom.SessionStorageNamespaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SessionStorageNamespace', [
      { explicit: null },
    ]);
  }

  clone(clone_to_namespace) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SessionStorageNamespace', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SessionStorageNamespace_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SessionStorageNamespace_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.clone_to_namespace);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SessionStorageNamespaceReceiver = blink.mojom.SessionStorageNamespaceReceiver;

blink.mojom.SessionStorageNamespacePtr = blink.mojom.SessionStorageNamespaceRemote;
blink.mojom.SessionStorageNamespaceRequest = blink.mojom.SessionStorageNamespacePendingReceiver;

