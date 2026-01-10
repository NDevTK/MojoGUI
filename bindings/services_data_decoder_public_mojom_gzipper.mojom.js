// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/gzipper.mojom
// Module: data_decoder.mojom

'use strict';

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
};

data_decoder.mojom.GzipperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  deflate(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.Gzipper_Deflate_ParamsSpec,
      data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec,
      [data],
      false);
  }

  inflate(data, max_uncompressed_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.Gzipper_Inflate_ParamsSpec,
      data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec,
      [data, max_uncompressed_size],
      false);
  }

  compress(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.Gzipper_Compress_ParamsSpec,
      data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec,
      [data],
      false);
  }

  uncompress(compressed_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Deflate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.Gzipper_Deflate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Deflate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Inflate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.Gzipper_Inflate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Inflate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Compress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.Gzipper_Compress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Compress (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: Uncompress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.Gzipper_Uncompress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Uncompress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.Gzipper_Deflate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deflate');
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
          const params = decoder.decodeStruct(data_decoder.mojom.Gzipper_Inflate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.inflate');
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
          const params = decoder.decodeStruct(data_decoder.mojom.Gzipper_Compress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.compress');
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
          const params = decoder.decodeStruct(data_decoder.mojom.Gzipper_Uncompress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.uncompress');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

data_decoder.mojom.GzipperReceiver = data_decoder.mojom.GzipperReceiver;

data_decoder.mojom.GzipperPtr = data_decoder.mojom.GzipperRemote;
data_decoder.mojom.GzipperRequest = data_decoder.mojom.GzipperPendingReceiver;

