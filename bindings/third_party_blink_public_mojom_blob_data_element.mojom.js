// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/data_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


blink.mojom.kMaximumEmbeddedDataSize = 256000;

// Union: DataElement
blink.mojom.DataElementSpec = { $: mojo.internal.Union(
    'blink.mojom.DataElement', {
      'bytes': {
        'ordinal': 0,
        'type': blink.mojom.DataElementBytesSpec,
      }},
      'file': {
        'ordinal': 1,
        'type': blink.mojom.DataElementFileSpec,
      }},
      'blob': {
        'ordinal': 2,
        'type': blink.mojom.DataElementBlobSpec,
      }},
    })
};

// Struct: DataElementBytes
blink.mojom.DataElementBytesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DataElementBytes',
      packedSize: 40,
      fields: [
        { name: 'kMaximumEmbeddedDataSize', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'embedded_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BytesProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DataElementFile
blink.mojom.DataElementFileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DataElementFile',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'expected_modification_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DataElementBlob
blink.mojom.DataElementBlobSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DataElementBlob',
      packedSize: 32,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: BytesProvider
blink.mojom.BytesProvider = {};

blink.mojom.BytesProvider_RequestAsReply_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider_RequestAsReply_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider_RequestAsStream_Params',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider_RequestAsFile_Params',
      packedSize: 40,
      fields: [
        { name: 'source_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'source_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'file_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.BytesProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BytesProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BytesProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BytesProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.BytesProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BytesProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAsReply() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BytesProvider_RequestAsReply_ParamsSpec,
      blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec,
      []);
  }

  requestAsStream(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BytesProvider_RequestAsStream_ParamsSpec,
      null,
      [pipe]);
  }

  requestAsFile(source_offset, source_size, file, file_offset) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BytesProvider_RequestAsFile_ParamsSpec,
      blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec,
      [source_offset, source_size, file, file_offset]);
  }

};

blink.mojom.BytesProvider.getRemote = function() {
  let remote = new blink.mojom.BytesProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BytesProvider',
    'context');
  return remote.$;
};

// ParamsSpec for RequestAsReply
blink.mojom.BytesProvider_RequestAsReply_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsReply_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsReply_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestAsStream
blink.mojom.BytesProvider_RequestAsStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsStream_Params',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestAsFile
blink.mojom.BytesProvider_RequestAsFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsFile_Params',
      packedSize: 40,
      fields: [
        { name: 'source_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'source_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'file_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'time_file_modified', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.BytesProviderPtr = blink.mojom.BytesProviderRemote;
blink.mojom.BytesProviderRequest = blink.mojom.BytesProviderPendingReceiver;

