// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/gzipper.mojom
// Module: data_decoder.mojom

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var mojo_base = mojo_base || {};

data_decoder.mojom.Gzipper = {};
data_decoder.mojom.Gzipper.$interfaceName = 'data_decoder.mojom.Gzipper';
data_decoder.mojom.Gzipper_Deflate_ParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Inflate_ParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Compress_ParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Uncompress_ParamsSpec = { $: {} };
data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec = { $: {} };

// Interface: Gzipper
mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Deflate_ParamsSpec, 'data_decoder.mojom.Gzipper_Deflate_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec, 'data_decoder.mojom.Gzipper_Deflate_ResponseParams', [
      mojo.internal.StructField('deflated_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Inflate_ParamsSpec, 'data_decoder.mojom.Gzipper_Inflate_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_uncompressed_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec, 'data_decoder.mojom.Gzipper_Inflate_ResponseParams', [
      mojo.internal.StructField('inflated_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Compress_ParamsSpec, 'data_decoder.mojom.Gzipper_Compress_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec, 'data_decoder.mojom.Gzipper_Compress_ResponseParams', [
      mojo.internal.StructField('compressed_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Uncompress_ParamsSpec, 'data_decoder.mojom.Gzipper_Uncompress_Params', [
      mojo.internal.StructField('compressed_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec, 'data_decoder.mojom.Gzipper_Uncompress_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

data_decoder.mojom.GzipperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.GzipperRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.Gzipper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.GzipperPendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.GzipperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  deflate(data) {
    return this.$.deflate(data);
  }
  inflate(data, max_uncompressed_size) {
    return this.$.inflate(data, max_uncompressed_size);
  }
  compress(data) {
    return this.$.compress(data);
  }
  uncompress(compressed_data) {
    return this.$.uncompress(compressed_data);
  }
};

data_decoder.mojom.GzipperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Gzipper', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  deflate(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_decoder.mojom.Gzipper_Deflate_ParamsSpec,
      data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec,
      [data],
      false);
  }

  inflate(data, max_uncompressed_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_decoder.mojom.Gzipper_Inflate_ParamsSpec,
      data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec,
      [data, max_uncompressed_size],
      false);
  }

  compress(data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      data_decoder.mojom.Gzipper_Compress_ParamsSpec,
      data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec,
      [data],
      false);
  }

  uncompress(compressed_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      data_decoder.mojom.Gzipper_Uncompress_ParamsSpec,
      data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec,
      [compressed_data],
      false);
  }

};

data_decoder.mojom.Gzipper.getRemote = function() {
  let remote = new data_decoder.mojom.GzipperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.Gzipper',
    'context');
  return remote.$;
};

data_decoder.mojom.GzipperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Gzipper', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(data_decoder.mojom.Gzipper_Deflate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.Gzipper_Inflate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.Gzipper_Compress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.Gzipper_Uncompress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.Gzipper_Deflate_ParamsSpec.$.structSpec);
          const result = this.impl.deflate(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.Gzipper_Inflate_ParamsSpec.$.structSpec);
          const result = this.impl.inflate(params.data, params.max_uncompressed_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.Gzipper_Compress_ParamsSpec.$.structSpec);
          const result = this.impl.compress(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.Gzipper_Uncompress_ParamsSpec.$.structSpec);
          const result = this.impl.uncompress(params.compressed_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

data_decoder.mojom.GzipperReceiver = data_decoder.mojom.GzipperReceiver;

data_decoder.mojom.GzipperPtr = data_decoder.mojom.GzipperRemote;
data_decoder.mojom.GzipperRequest = data_decoder.mojom.GzipperPendingReceiver;

