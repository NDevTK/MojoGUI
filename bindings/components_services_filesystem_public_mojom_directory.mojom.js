// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/directory.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};
var components = components || {};
var services = services || {};

filesystem.mojom.FileOpenDetailsSpec = { $: {} };
filesystem.mojom.FileOpenResultSpec = { $: {} };
filesystem.mojom.Directory = {};
filesystem.mojom.Directory.$interfaceName = 'filesystem.mojom.Directory';
filesystem.mojom.Directory_Read_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Read_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandle_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandles_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenDirectory_ParamsSpec = { $: {} };
filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Rename_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Rename_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Replace_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Replace_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Delete_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Delete_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Exists_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Exists_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_IsWritable_ParamsSpec = { $: {} };
filesystem.mojom.Directory_IsWritable_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Flush_ParamsSpec = { $: {} };
filesystem.mojom.Directory_Flush_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_StatFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_StatFile_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_Clone_ParamsSpec = { $: {} };
filesystem.mojom.Directory_ReadEntireFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec = { $: {} };
filesystem.mojom.Directory_WriteFile_ParamsSpec = { $: {} };
filesystem.mojom.Directory_WriteFile_ResponseParamsSpec = { $: {} };

// Struct: FileOpenDetails
mojo.internal.Struct(
    filesystem.mojom.FileOpenDetailsSpec, 'filesystem.mojom.FileOpenDetails', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('open_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileOpenResult
mojo.internal.Struct(
    filesystem.mojom.FileOpenResultSpec, 'filesystem.mojom.FileOpenResult', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_handle', 8, 0, mojo_base.mojom.FileSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Directory
mojo.internal.Struct(
    filesystem.mojom.Directory_Read_ParamsSpec, 'filesystem.mojom.Directory_Read_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Read_ResponseParamsSpec, 'filesystem.mojom.Directory_Read_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('directory_contents', 0, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandle_ParamsSpec, 'filesystem.mojom.Directory_OpenFileHandle_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('open_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenFileHandle_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_handle', 0, 0, mojo_base.mojom.FileSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandles_ParamsSpec, 'filesystem.mojom.Directory_OpenFileHandles_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(filesystem.mojom.FileOpenDetailsSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenFileHandles_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(filesystem.mojom.FileOpenResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenDirectory_ParamsSpec, 'filesystem.mojom.Directory_OpenDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceRequest(filesystem.mojom.DirectoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('open_flags', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec, 'filesystem.mojom.Directory_OpenDirectory_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Rename_ParamsSpec, 'filesystem.mojom.Directory_Rename_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Rename_ResponseParamsSpec, 'filesystem.mojom.Directory_Rename_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Replace_ParamsSpec, 'filesystem.mojom.Directory_Replace_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Replace_ResponseParamsSpec, 'filesystem.mojom.Directory_Replace_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Delete_ParamsSpec, 'filesystem.mojom.Directory_Delete_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delete_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Delete_ResponseParamsSpec, 'filesystem.mojom.Directory_Delete_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Exists_ParamsSpec, 'filesystem.mojom.Directory_Exists_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Exists_ResponseParamsSpec, 'filesystem.mojom.Directory_Exists_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('exists', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_IsWritable_ParamsSpec, 'filesystem.mojom.Directory_IsWritable_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_IsWritable_ResponseParamsSpec, 'filesystem.mojom.Directory_IsWritable_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_writable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Flush_ParamsSpec, 'filesystem.mojom.Directory_Flush_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Flush_ResponseParamsSpec, 'filesystem.mojom.Directory_Flush_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_StatFile_ParamsSpec, 'filesystem.mojom.Directory_StatFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_StatFile_ResponseParamsSpec, 'filesystem.mojom.Directory_StatFile_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_information', 0, 0, filesystem.mojom.FileInformationSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_Clone_ParamsSpec, 'filesystem.mojom.Directory_Clone_Params', [
      mojo.internal.StructField('directory', 0, 0, mojo.internal.InterfaceRequest(filesystem.mojom.DirectoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_ReadEntireFile_ParamsSpec, 'filesystem.mojom.Directory_ReadEntireFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec, 'filesystem.mojom.Directory_ReadEntireFile_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_WriteFile_ParamsSpec, 'filesystem.mojom.Directory_WriteFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    filesystem.mojom.Directory_WriteFile_ResponseParamsSpec, 'filesystem.mojom.Directory_WriteFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

filesystem.mojom.DirectoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

filesystem.mojom.DirectoryRemote = class {
  static get $interfaceName() {
    return 'filesystem.mojom.Directory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      filesystem.mojom.DirectoryPendingReceiver,
      handle);
    this.$ = new filesystem.mojom.DirectoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

filesystem.mojom.DirectoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      filesystem.mojom.Directory_Read_ParamsSpec,
      filesystem.mojom.Directory_Read_ResponseParamsSpec,
      []);
  }

  openFileHandle(path, open_flags) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      filesystem.mojom.Directory_OpenFileHandle_ParamsSpec,
      filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec,
      [path, open_flags]);
  }

  openFileHandles(files) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      filesystem.mojom.Directory_OpenFileHandles_ParamsSpec,
      filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec,
      [files]);
  }

  openDirectory(path, directory, open_flags) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      filesystem.mojom.Directory_OpenDirectory_ParamsSpec,
      filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec,
      [path, directory, open_flags]);
  }

  rename(path, new_path) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      filesystem.mojom.Directory_Rename_ParamsSpec,
      filesystem.mojom.Directory_Rename_ResponseParamsSpec,
      [path, new_path]);
  }

  replace(path, new_path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      filesystem.mojom.Directory_Replace_ParamsSpec,
      filesystem.mojom.Directory_Replace_ResponseParamsSpec,
      [path, new_path]);
  }

  delete(path, delete_flags) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      filesystem.mojom.Directory_Delete_ParamsSpec,
      filesystem.mojom.Directory_Delete_ResponseParamsSpec,
      [path, delete_flags]);
  }

  exists(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      filesystem.mojom.Directory_Exists_ParamsSpec,
      filesystem.mojom.Directory_Exists_ResponseParamsSpec,
      [path]);
  }

  isWritable(path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      filesystem.mojom.Directory_IsWritable_ParamsSpec,
      filesystem.mojom.Directory_IsWritable_ResponseParamsSpec,
      [path]);
  }

  flush() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      filesystem.mojom.Directory_Flush_ParamsSpec,
      filesystem.mojom.Directory_Flush_ResponseParamsSpec,
      []);
  }

  statFile(path) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      filesystem.mojom.Directory_StatFile_ParamsSpec,
      filesystem.mojom.Directory_StatFile_ResponseParamsSpec,
      [path]);
  }

  clone(directory) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      filesystem.mojom.Directory_Clone_ParamsSpec,
      null,
      [directory]);
  }

  readEntireFile(path) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      filesystem.mojom.Directory_ReadEntireFile_ParamsSpec,
      filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec,
      [path]);
  }

  writeFile(path, data) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      filesystem.mojom.Directory_WriteFile_ParamsSpec,
      filesystem.mojom.Directory_WriteFile_ResponseParamsSpec,
      [path, data]);
  }

};

filesystem.mojom.Directory.getRemote = function() {
  let remote = new filesystem.mojom.DirectoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'filesystem.mojom.Directory',
    'context');
  return remote.$;
};

filesystem.mojom.DirectoryPtr = filesystem.mojom.DirectoryRemote;
filesystem.mojom.DirectoryRequest = filesystem.mojom.DirectoryPendingReceiver;

