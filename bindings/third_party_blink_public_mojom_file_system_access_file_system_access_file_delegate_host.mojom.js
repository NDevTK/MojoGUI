// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_delegate_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileDelegateHost
blink.mojom.FileSystemAccessFileDelegateHost = {};

blink.mojom.FileSystemAccessFileDelegateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileDelegateHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileDelegateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileDelegateHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileDelegateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileDelegateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, bytes_to_read) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileDelegateHost_Read_ParamsSpec,
      blink.mojom.FileSystemAccessFileDelegateHost_Read_ResponseParamsSpec,
      [offset, bytes_to_read]);
  }

  write(offset, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileDelegateHost_Write_ParamsSpec,
      blink.mojom.FileSystemAccessFileDelegateHost_Write_ResponseParamsSpec,
      [offset, data]);
  }

  getLength() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ParamsSpec,
      blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ResponseParamsSpec,
      []);
  }

  setLength(length) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ParamsSpec,
      blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ResponseParamsSpec,
      [length]);
  }

};

blink.mojom.FileSystemAccessFileDelegateHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileDelegateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileDelegateHost',
    'context');
  return remote.$;
};

// ParamsSpec for Read
blink.mojom.FileSystemAccessFileDelegateHost_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.Read_Params',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'bytes_to_read', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileDelegateHost_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.Read_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bytes_read', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Write
blink.mojom.FileSystemAccessFileDelegateHost_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.Write_Params',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileDelegateHost_Write_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.Write_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bytes_written', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLength
blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.GetLength_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.GetLength_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetLength
blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.SetLength_Params',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileDelegateHost.SetLength_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessFileDelegateHostPtr = blink.mojom.FileSystemAccessFileDelegateHostRemote;
blink.mojom.FileSystemAccessFileDelegateHostRequest = blink.mojom.FileSystemAccessFileDelegateHostPendingReceiver;

