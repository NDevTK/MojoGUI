// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/image_decoder.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Enum: ImageCodec
data_decoder.mojom.ImageCodec = {
  kDefault: 0,
  kPng: 1,
};

// Struct: AnimationFrame
data_decoder.mojom.AnimationFrameSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.AnimationFrame',
      packedSize: 24,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.InlineBitmapSpec, nullable: false },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ImageDecoder
data_decoder.mojom.ImageDecoder = {};

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
      [encoded_data, codec, shrink_to_fit, max_size_in_bytes, desired_image_frame_size]);
  }

  decodeAnimation(encoded_data, shrink_to_fit, max_size_in_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec,
      data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec,
      [encoded_data, shrink_to_fit, max_size_in_bytes]);
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

// ParamsSpec for DecodeImage
data_decoder.mojom.ImageDecoder_DecodeImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.ImageDecoder.DecodeImage_Params',
      packedSize: 48,
      fields: [
        { name: 'encoded_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'codec', packedOffset: 8, packedBitOffset: 0, type: data_decoder.mojom.ImageCodecSpec, nullable: false },
        { name: 'shrink_to_fit', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'max_size_in_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'desired_image_frame_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.ImageDecoder_DecodeImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.ImageDecoder.DecodeImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'decoding_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'decoded_image', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DecodeAnimation
data_decoder.mojom.ImageDecoder_DecodeAnimation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.ImageDecoder.DecodeAnimation_Params',
      packedSize: 32,
      fields: [
        { name: 'encoded_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'shrink_to_fit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'max_size_in_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.ImageDecoder_DecodeAnimation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.ImageDecoder.DecodeAnimation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'decoded_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_decoder.mojom.ImageDecoderPtr = data_decoder.mojom.ImageDecoderRemote;
data_decoder.mojom.ImageDecoderRequest = data_decoder.mojom.ImageDecoderPendingReceiver;

