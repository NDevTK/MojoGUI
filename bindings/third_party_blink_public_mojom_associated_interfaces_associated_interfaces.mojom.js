// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AssociatedInterface = {};
blink.mojom.AssociatedInterface.$interfaceName = 'blink.mojom.AssociatedInterface';
blink.mojom.AssociatedInterfaceProvider = {};
blink.mojom.AssociatedInterfaceProvider.$interfaceName = 'blink.mojom.AssociatedInterfaceProvider';
blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec = { $: {} };

// Interface: AssociatedInterface
blink.mojom.AssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfacePendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssociatedInterface', [
    ]);
  }

};

blink.mojom.AssociatedInterface.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterface',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssociatedInterface', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AssociatedInterfaceReceiver = blink.mojom.AssociatedInterfaceReceiver;

blink.mojom.AssociatedInterfacePtr = blink.mojom.AssociatedInterfaceRemote;
blink.mojom.AssociatedInterfaceRequest = blink.mojom.AssociatedInterfacePendingReceiver;


// Interface: AssociatedInterfaceProvider
mojo.internal.Struct(
    blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec, 'blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AssociatedInterfaceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AssociatedInterfaceProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AssociatedInterfaceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AssociatedInterfaceProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.AssociatedInterfaceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAssociatedInterface(name, receiver) {
    return this.$.getAssociatedInterface(name, receiver);
  }
};

blink.mojom.AssociatedInterfaceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssociatedInterfaceProvider', [
      { explicit: null },
    ]);
  }

  getAssociatedInterface(name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

};

blink.mojom.AssociatedInterfaceProvider.getRemote = function() {
  let remote = new blink.mojom.AssociatedInterfaceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AssociatedInterfaceProvider',
    'context');
  return remote.$;
};

blink.mojom.AssociatedInterfaceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssociatedInterfaceProvider', [
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
             decoder.decodeStructInline(blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AssociatedInterfaceProvider_GetAssociatedInterface_ParamsSpec.$.structSpec);
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AssociatedInterfaceProviderReceiver = blink.mojom.AssociatedInterfaceProviderReceiver;

blink.mojom.AssociatedInterfaceProviderPtr = blink.mojom.AssociatedInterfaceProviderRemote;
blink.mojom.AssociatedInterfaceProviderRequest = blink.mojom.AssociatedInterfaceProviderPendingReceiver;

