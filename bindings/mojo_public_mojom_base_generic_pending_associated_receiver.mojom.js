// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_associated_receiver.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.GenericPendingAssociatedReceiverSpec = { $: {} };
mojo_base.mojom.GenericAssociatedInterface = {};
mojo_base.mojom.GenericAssociatedInterface.$interfaceName = 'mojo_base.mojom.GenericAssociatedInterface';

// Struct: GenericPendingAssociatedReceiver
mojo.internal.Struct(
    mojo_base.mojom.GenericPendingAssociatedReceiverSpec, 'mojo_base.mojom.GenericPendingAssociatedReceiver', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: GenericAssociatedInterface
mojo_base.mojom.GenericAssociatedInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.GenericAssociatedInterfaceRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.GenericAssociatedInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.GenericAssociatedInterfacePendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.GenericAssociatedInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo_base.mojom.GenericAssociatedInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GenericAssociatedInterface', [
    ]);
  }

};

mojo_base.mojom.GenericAssociatedInterface.getRemote = function() {
  let remote = new mojo_base.mojom.GenericAssociatedInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.GenericAssociatedInterface',
    'context');
  return remote.$;
};

mojo_base.mojom.GenericAssociatedInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GenericAssociatedInterface', [
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

mojo_base.mojom.GenericAssociatedInterfaceReceiver = mojo_base.mojom.GenericAssociatedInterfaceReceiver;

mojo_base.mojom.GenericAssociatedInterfacePtr = mojo_base.mojom.GenericAssociatedInterfaceRemote;
mojo_base.mojom.GenericAssociatedInterfaceRequest = mojo_base.mojom.GenericAssociatedInterfacePendingReceiver;

