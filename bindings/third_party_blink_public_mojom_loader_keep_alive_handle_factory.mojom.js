// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle_factory.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.KeepAliveHandleFactory = {};
blink.mojom.KeepAliveHandleFactory.$interfaceName = 'blink.mojom.KeepAliveHandleFactory';
blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec = { $: {} };

// Interface: KeepAliveHandleFactory
mojo.internal.Struct(
    blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('keep_alive_handle', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.KeepAliveHandleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.KeepAliveHandleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.KeepAliveHandleFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.KeepAliveHandleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.KeepAliveHandleFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.KeepAliveHandleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  issueKeepAliveHandle(keep_alive_handle) {
    return this.$.issueKeepAliveHandle(keep_alive_handle);
  }
};

blink.mojom.KeepAliveHandleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeepAliveHandleFactory', [
      { explicit: null },
    ]);
  }

  issueKeepAliveHandle(keep_alive_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec,
      null,
      [keep_alive_handle],
      false);
  }

};

blink.mojom.KeepAliveHandleFactory.getRemote = function() {
  let remote = new blink.mojom.KeepAliveHandleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.KeepAliveHandleFactory',
    'context');
  return remote.$;
};

blink.mojom.KeepAliveHandleFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeepAliveHandleFactory', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.KeepAliveHandleFactory_IssueKeepAliveHandle_ParamsSpec.$.structSpec);
          const result = this.impl.issueKeepAliveHandle(params.keep_alive_handle);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.KeepAliveHandleFactoryReceiver = blink.mojom.KeepAliveHandleFactoryReceiver;

blink.mojom.KeepAliveHandleFactoryPtr = blink.mojom.KeepAliveHandleFactoryRemote;
blink.mojom.KeepAliveHandleFactoryRequest = blink.mojom.KeepAliveHandleFactoryPendingReceiver;

