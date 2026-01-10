// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_delegate_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessFileDelegateHost = {};
blink.mojom.FileSystemAccessFileDelegateHost.$interfaceName = 'blink.mojom.FileSystemAccessFileDelegateHost';
blink.mojom.FileSystemAccessFileDelegateHost_Read_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_Read_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_Write_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_Write_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ResponseParamsSpec = { $: {} };

// Interface: FileSystemAccessFileDelegateHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_Read_ParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_to_read', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_Read_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_Read_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec, null, true, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('bytes_read', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_Write_ParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_Write_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_Write_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_Write_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('bytes_written', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_GetLength_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_GetLength_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('length', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_SetLength_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileDelegateHost_SetLength_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

blink.mojom.FileSystemAccessFileDelegateHostPtr = blink.mojom.FileSystemAccessFileDelegateHostRemote;
blink.mojom.FileSystemAccessFileDelegateHostRequest = blink.mojom.FileSystemAccessFileDelegateHostPendingReceiver;

