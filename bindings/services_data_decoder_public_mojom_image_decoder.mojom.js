// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/image_decoder.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

data_decoder.mojom.ImageCodecSpec = { $: mojo.internal.Enum() };
data_decoder.mojom.AnimationFrameSpec = { $: {} };
data_decoder.mojom.ImageDecoder = {};
data_decoder.mojom.ImageDecoder.$interfaceName = 'data_decoder.mojom.ImageDecoder';
data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec = { $: {} };
data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParamsSpec = { $: {} };
data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec = { $: {} };
data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec = { $: {} };

// Enum: ImageCodec
data_decoder.mojom.ImageCodec = {
  kDefault: 0,
  kPng: 1,
};

// Struct: AnimationFrame
mojo.internal.Struct(
    data_decoder.mojom.AnimationFrameSpec, 'data_decoder.mojom.AnimationFrame', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.InlineBitmapSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ImageDecoder
mojo.internal.Struct(
    data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec, 'data_decoder.mojom.ImageDecoder_DecodeImage_Params', [
      mojo.internal.StructField('encoded_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('codec', 8, 0, data_decoder.mojom.ImageCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size_in_bytes', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('desired_image_frame_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shrink_to_fit', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParamsSpec, 'data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParams', [
      mojo.internal.StructField('decoding_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoded_image', 8, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec, 'data_decoder.mojom.ImageDecoder_DecodeAnimation_Params', [
      mojo.internal.StructField('encoded_data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size_in_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('shrink_to_fit', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec, 'data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParams', [
      mojo.internal.StructField('decoded_image', 0, 0, mojo.internal.Array(data_decoder.mojom.AnimationFrameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

data_decoder.mojom.ImageDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.ImageDecoderRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.ImageDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.ImageDecoderPendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.ImageDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.ImageDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  decodeImage(encoded_data, codec, shrink_to_fit, max_size_in_bytes, desired_image_frame_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec,
      data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParamsSpec,
      [encoded_data, codec, shrink_to_fit, max_size_in_bytes, desired_image_frame_size],
      false);
  }

  decodeAnimation(encoded_data, shrink_to_fit, max_size_in_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec,
      data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec,
      [encoded_data, shrink_to_fit, max_size_in_bytes],
      false);
  }

};

data_decoder.mojom.ImageDecoder.getRemote = function() {
  let remote = new data_decoder.mojom.ImageDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.ImageDecoder',
    'context');
  return remote.$;
};

data_decoder.mojom.ImageDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: DecodeImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeImage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DecodeAnimation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecodeAnimation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decodeImage');
          const result = this.impl.decodeImage(params.encoded_data, params.codec, params.shrink_to_fit, params.max_size_in_bytes, params.desired_image_frame_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decodeAnimation');
          const result = this.impl.decodeAnimation(params.encoded_data, params.shrink_to_fit, params.max_size_in_bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec);
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

data_decoder.mojom.ImageDecoderReceiver = data_decoder.mojom.ImageDecoderReceiver;

data_decoder.mojom.ImageDecoderPtr = data_decoder.mojom.ImageDecoderRemote;
data_decoder.mojom.ImageDecoderRequest = data_decoder.mojom.ImageDecoderPendingReceiver;

