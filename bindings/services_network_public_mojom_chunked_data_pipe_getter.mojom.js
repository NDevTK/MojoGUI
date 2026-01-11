// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/chunked_data_pipe_getter.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ChunkedDataPipeGetter = {};
network.mojom.ChunkedDataPipeGetter.$interfaceName = 'network.mojom.ChunkedDataPipeGetter';
network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec = { $: {} };

// Interface: ChunkedDataPipeGetter
mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_StartReading_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ChunkedDataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ChunkedDataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ChunkedDataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ChunkedDataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.ChunkedDataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSize() {
    return this.$.getSize();
  }
  startReading(pipe) {
    return this.$.startReading(pipe);
  }
};

network.mojom.ChunkedDataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChunkedDataPipeGetter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSize() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec,
      network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec,
      [],
      false);
  }

  startReading(pipe) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec,
      null,
      [pipe],
      false);
  }

};

network.mojom.ChunkedDataPipeGetter.getRemote = function() {
  let remote = new network.mojom.ChunkedDataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ChunkedDataPipeGetter',
    'context');
  return remote.$;
};

network.mojom.ChunkedDataPipeGetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChunkedDataPipeGetter', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec.$.structSpec);
          const result = this.impl.getSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec.$.structSpec);
          const result = this.impl.startReading(params.pipe);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ChunkedDataPipeGetterReceiver = network.mojom.ChunkedDataPipeGetterReceiver;

network.mojom.ChunkedDataPipeGetterPtr = network.mojom.ChunkedDataPipeGetterRemote;
network.mojom.ChunkedDataPipeGetterRequest = network.mojom.ChunkedDataPipeGetterPendingReceiver;

