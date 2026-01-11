// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/browser_interface_broker.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.BrowserInterfaceBroker = {};
blink.mojom.BrowserInterfaceBroker.$interfaceName = 'blink.mojom.BrowserInterfaceBroker';
blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec = { $: {} };

// Interface: BrowserInterfaceBroker
mojo.internal.Struct(
    blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec, 'blink.mojom.BrowserInterfaceBroker_GetInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BrowserInterfaceBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BrowserInterfaceBrokerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BrowserInterfaceBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BrowserInterfaceBrokerPendingReceiver,
      handle);
    this.$ = new blink.mojom.BrowserInterfaceBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getInterface(receiver) {
    return this.$.getInterface(receiver);
  }
};

blink.mojom.BrowserInterfaceBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BrowserInterfaceBroker', [
      { explicit: null },
    ]);
  }

  getInterface(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

blink.mojom.BrowserInterfaceBroker.getRemote = function() {
  let remote = new blink.mojom.BrowserInterfaceBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BrowserInterfaceBroker',
    'context');
  return remote.$;
};

blink.mojom.BrowserInterfaceBrokerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BrowserInterfaceBroker', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BrowserInterfaceBroker_GetInterface_ParamsSpec.$.structSpec);
          const result = this.impl.getInterface(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.BrowserInterfaceBrokerReceiver = blink.mojom.BrowserInterfaceBrokerReceiver;

blink.mojom.BrowserInterfaceBrokerPtr = blink.mojom.BrowserInterfaceBrokerRemote;
blink.mojom.BrowserInterfaceBrokerRequest = blink.mojom.BrowserInterfaceBrokerPendingReceiver;

