// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.Binder = {};
mojo_base.mojom.Binder.$interfaceName = 'mojo_base.mojom.Binder';
mojo_base.mojom.Binder_Bind_ParamsSpec = { $: {} };

// Interface: Binder
mojo.internal.Struct(
    mojo_base.mojom.Binder_Bind_ParamsSpec, 'mojo_base.mojom.Binder_Bind_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo_base.mojom.BinderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo_base.mojom.BinderRemote = class {
  static get $interfaceName() {
    return 'mojo_base.mojom.Binder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo_base.mojom.BinderPendingReceiver,
      handle);
    this.$ = new mojo_base.mojom.BinderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bind(receiver) {
    return this.$.bind(receiver);
  }
};

mojo_base.mojom.BinderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Binder', [
      { explicit: 0 },
    ]);
  }

  bind(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo_base.mojom.Binder_Bind_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

mojo_base.mojom.Binder.getRemote = function() {
  let remote = new mojo_base.mojom.BinderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojo_base.mojom.Binder',
    'context');
  return remote.$;
};

mojo_base.mojom.BinderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Binder', [
      { explicit: 0 },
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
             decoder.decodeStructInline(mojo_base.mojom.Binder_Bind_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo_base.mojom.Binder_Bind_ParamsSpec.$.structSpec);
          const result = this.impl.bind(params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mojo_base.mojom.BinderReceiver = mojo_base.mojom.BinderReceiver;

mojo_base.mojom.BinderPtr = mojo_base.mojom.BinderRemote;
mojo_base.mojom.BinderRequest = mojo_base.mojom.BinderPendingReceiver;

