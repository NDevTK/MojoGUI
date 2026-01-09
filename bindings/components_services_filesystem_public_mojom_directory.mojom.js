// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/directory.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};


// Interface: Directory
filesystem.mojom.Directory = {};

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

// ParamsSpec for Read
filesystem.mojom.Directory_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Read_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory_contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFileHandle
filesystem.mojom.Directory_OpenFileHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenFileHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'open_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_OpenFileHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenFileHandle_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFileHandles
filesystem.mojom.Directory_OpenFileHandles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenFileHandles_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_OpenFileHandles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenFileHandles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenDirectory
filesystem.mojom.Directory_OpenDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenDirectory_Params',
      packedSize: 32,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'open_flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_OpenDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.OpenDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Rename
filesystem.mojom.Directory_Rename_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Rename_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'new_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Rename_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Rename_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Replace
filesystem.mojom.Directory_Replace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Replace_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'new_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Replace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Replace_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Delete
filesystem.mojom.Directory_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Delete_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'delete_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Delete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Exists
filesystem.mojom.Directory_Exists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Exists_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Exists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Exists_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'exists', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsWritable
filesystem.mojom.Directory_IsWritable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.IsWritable_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_IsWritable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.IsWritable_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_writable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Flush
filesystem.mojom.Directory_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Flush_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StatFile
filesystem.mojom.Directory_StatFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.StatFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_StatFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.StatFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_information', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
filesystem.mojom.Directory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'directory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadEntireFile
filesystem.mojom.Directory_ReadEntireFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.ReadEntireFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_ReadEntireFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.ReadEntireFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteFile
filesystem.mojom.Directory_WriteFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.WriteFile_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

filesystem.mojom.Directory_WriteFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.Directory.WriteFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
filesystem.mojom.DirectoryPtr = filesystem.mojom.DirectoryRemote;
filesystem.mojom.DirectoryRequest = filesystem.mojom.DirectoryPendingReceiver;

