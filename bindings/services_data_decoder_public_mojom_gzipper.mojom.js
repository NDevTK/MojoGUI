// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/gzipper.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: Gzipper
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
      data_decoder.mojom.Gzipper_Deflate_ParamsSpec.$,
      data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec.$,
      [data]);
  }

  inflate(data, max_uncompressed_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.Gzipper_Inflate_ParamsSpec.$,
      data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec.$,
      [data, max_uncompressed_size]);
  }

  compress(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.Gzipper_Compress_ParamsSpec.$,
      data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec.$,
      [data]);
  }

  uncompress(compressed_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_decoder.mojom.Gzipper_Uncompress_ParamsSpec.$,
      data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec.$,
      [compressed_data]);
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

// ParamsSpec for Deflate
data_decoder.mojom.Gzipper_Deflate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Deflate_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.Gzipper_Deflate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Deflate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'deflated_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Inflate
data_decoder.mojom.Gzipper_Inflate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Inflate_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_uncompressed_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.Gzipper_Inflate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Inflate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inflated_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Compress
data_decoder.mojom.Gzipper_Compress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Compress_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.Gzipper_Compress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Compress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'compressed_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Uncompress
data_decoder.mojom.Gzipper_Uncompress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Uncompress_Params',
      packedSize: 16,
      fields: [
        { name: 'compressed_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.Gzipper_Uncompress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.Gzipper.Uncompress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_decoder.mojom.GzipperPtr = data_decoder.mojom.GzipperRemote;
data_decoder.mojom.GzipperRequest = data_decoder.mojom.GzipperPendingReceiver;

