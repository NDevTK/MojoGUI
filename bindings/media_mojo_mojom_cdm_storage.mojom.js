// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_storage.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
  kInUse: 1,
  kFailure: 2,
};
media.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
  kFailure: 1,
};
media.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Interface: CdmStorage
media.mojom.CdmStorage = {};

media.mojom.CdmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmStorageRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmStoragePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  open(file_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmStorage_Open_ParamsSpec,
      media.mojom.CdmStorage_Open_ResponseParamsSpec,
      [file_name]);
  }

};

media.mojom.CdmStorage.getRemote = function() {
  let remote = new media.mojom.CdmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmStorage',
    'context');
  return remote.$;
};

// ParamsSpec for Open
media.mojom.CdmStorage_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmStorage.Open_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmStorage_Open_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmStorage.Open_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'cdm_file', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmStoragePtr = media.mojom.CdmStorageRemote;
media.mojom.CdmStorageRequest = media.mojom.CdmStoragePendingReceiver;


// Interface: CdmFile
media.mojom.CdmFile = {};

media.mojom.CdmFilePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmFileRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmFile';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmFilePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmFileRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmFileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmFile_Read_ParamsSpec,
      media.mojom.CdmFile_Read_ResponseParamsSpec,
      []);
  }

  write(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.CdmFile_Write_ParamsSpec,
      media.mojom.CdmFile_Write_ResponseParamsSpec,
      [data]);
  }

};

media.mojom.CdmFile.getRemote = function() {
  let remote = new media.mojom.CdmFileRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmFile',
    'context');
  return remote.$;
};

// ParamsSpec for Read
media.mojom.CdmFile_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFile.Read_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmFile_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFile.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Write
media.mojom.CdmFile_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFile.Write_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmFile_Write_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFile.Write_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.StatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmFilePtr = media.mojom.CdmFileRemote;
media.mojom.CdmFileRequest = media.mojom.CdmFilePendingReceiver;

