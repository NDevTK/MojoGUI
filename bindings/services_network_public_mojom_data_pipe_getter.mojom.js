// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/data_pipe_getter.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.DataPipeGetter = {};
network.mojom.DataPipeGetter.$interfaceName = 'network.mojom.DataPipeGetter';
network.mojom.DataPipeGetter_Read_ParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Read_ResponseParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Clone_ParamsSpec = { $: {} };

// Interface: DataPipeGetter
mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ParamsSpec, 'network.mojom.DataPipeGetter_Read_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ResponseParamsSpec, 'network.mojom.DataPipeGetter_Read_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Clone_ParamsSpec, 'network.mojom.DataPipeGetter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.DataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read(pipe) {
    return this.$.read(pipe);
  }
  clone(receiver) {
    return this.$.clone(receiver);
  }
};

network.mojom.DataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataPipeGetter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  read(pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.DataPipeGetter_Read_ParamsSpec,
      network.mojom.DataPipeGetter_Read_ResponseParamsSpec,
      [pipe],
      false);
  }

  clone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.DataPipeGetter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

network.mojom.DataPipeGetter.getRemote = function() {
  let remote = new network.mojom.DataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DataPipeGetter',
    'context');
  return remote.$;
};

network.mojom.DataPipeGetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DataPipeGetter', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DataPipeGetter_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.DataPipeGetter_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DataPipeGetter_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read(params.pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DataPipeGetter_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.DataPipeGetter_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.DataPipeGetterReceiver = network.mojom.DataPipeGetterReceiver;

network.mojom.DataPipeGetterPtr = network.mojom.DataPipeGetterRemote;
network.mojom.DataPipeGetterRequest = network.mojom.DataPipeGetterPendingReceiver;

