// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/gzipper.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};

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

data_decoder.mojom.GzipperPtr = data_decoder.mojom.GzipperRemote;
data_decoder.mojom.GzipperRequest = data_decoder.mojom.GzipperPendingReceiver;

