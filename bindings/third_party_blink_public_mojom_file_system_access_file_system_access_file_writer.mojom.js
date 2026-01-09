// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileWriter
blink.mojom.FileSystemAccessFileWriter = {};

blink.mojom.FileSystemAccessFileWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileWriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileWriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(offset, stream) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec,
      [offset, stream]);
  }

  truncate(length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec,
      [length]);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec,
      []);
  }

  abort() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec,
      blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec,
      []);
  }

};

blink.mojom.FileSystemAccessFileWriter.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileWriter',
    'context');
  return remote.$;
};

// ParamsSpec for Write
blink.mojom.FileSystemAccessFileWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Write_Params',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileWriter_Write_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Write_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'bytes_written', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Truncate
blink.mojom.FileSystemAccessFileWriter_Truncate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Truncate_Params',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileWriter_Truncate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Truncate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
blink.mojom.FileSystemAccessFileWriter_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileWriter_Close_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Close_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.FileSystemAccessFileWriter_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileWriter_Abort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileWriter.Abort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessFileWriterPtr = blink.mojom.FileSystemAccessFileWriterRemote;
blink.mojom.FileSystemAccessFileWriterRequest = blink.mojom.FileSystemAccessFileWriterPendingReceiver;

