// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WellKnownDirectory
blink.mojom.WellKnownDirectory = {
  kDirDesktop: 0,
  kDirDocuments: 1,
  kDirDownloads: 2,
  kDirMusic: 3,
  kDirPictures: 4,
  kDirVideos: 5,
};

// Interface: FileSystemAccessManager
blink.mojom.FileSystemAccessManager = {};

blink.mojom.FileSystemAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSandboxedFileSystem() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec,
      []);
  }

  getSandboxedFileSystemForDevtools(directory_path_components) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec,
      [directory_path_components]);
  }

  chooseEntries(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec,
      blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec,
      [options]);
  }

  getFileHandleFromToken(token, file_handle) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec,
      null,
      [token, file_handle]);
  }

  getDirectoryHandleFromToken(token, directory_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec,
      null,
      [token, directory_handle]);
  }

  getEntryFromDataTransferToken(token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec,
      blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec,
      [token]);
  }

  bindObserverHost(observer_host) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec,
      null,
      [observer_host]);
  }

};

blink.mojom.FileSystemAccessManager.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetSandboxedFileSystem
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetSandboxedFileSystem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessManager_GetSandboxedFileSystem_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetSandboxedFileSystem_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSandboxedFileSystemForDevtools
blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetSandboxedFileSystemForDevtools_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_path_components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessManager_GetSandboxedFileSystemForDevtools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetSandboxedFileSystemForDevtools_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ChooseEntries
blink.mojom.FileSystemAccessManager_ChooseEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.ChooseEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessManager_ChooseEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.ChooseEntries_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFileHandleFromToken
blink.mojom.FileSystemAccessManager_GetFileHandleFromToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetFileHandleFromToken_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'file_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDirectoryHandleFromToken
blink.mojom.FileSystemAccessManager_GetDirectoryHandleFromToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetDirectoryHandleFromToken_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'directory_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEntryFromDataTransferToken
blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetEntryFromDataTransferToken_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessManager_GetEntryFromDataTransferToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.GetEntryFromDataTransferToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'entry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindObserverHost
blink.mojom.FileSystemAccessManager_BindObserverHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessManager.BindObserverHost_Params',
      packedSize: 16,
      fields: [
        { name: 'observer_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessManagerPtr = blink.mojom.FileSystemAccessManagerRemote;
blink.mojom.FileSystemAccessManagerRequest = blink.mojom.FileSystemAccessManagerPendingReceiver;

