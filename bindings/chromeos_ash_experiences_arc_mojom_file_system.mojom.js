// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ChangeType
arc.mojom.ChangeType = {
  CHANGED: 0,
  DELETED: 1,
};

// Enum: SelectFilesActionType
arc.mojom.SelectFilesActionType = {
  GET_CONTENT: 0,
  OPEN_DOCUMENT: 1,
  OPEN_DOCUMENT_TREE: 2,
  CREATE_DOCUMENT: 3,
};

// Enum: FileSelectorEventType
arc.mojom.FileSelectorEventType = {
  CLICK_OK: 0,
  CLICK_DIRECTORY: 1,
  CLICK_FILE: 2,
  CLICK_CANCEL: 3,
};

// Struct: Document
arc.mojom.DocumentSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Document',
      packedSize: 16,
      fields: [
        { name: 'supports_thumbnail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Root
arc.mojom.RootSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Root',
      packedSize: 16,
      fields: [
        { name: 'mime_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentUrlWithMimeType
arc.mojom.ContentUrlWithMimeTypeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ContentUrlWithMimeType',
      packedSize: 16,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpenUrlsRequest
arc.mojom.OpenUrlsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OpenUrlsRequest',
      packedSize: 16,
      fields: [
        { name: 'extras', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectFilesRequest
arc.mojom.SelectFilesRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SelectFilesRequest',
      packedSize: 16,
      fields: [
        { name: 'search_query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DocumentPath
arc.mojom.DocumentPathSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DocumentPath',
      packedSize: 16,
      fields: [
        { name: 'root_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectFilesResult
arc.mojom.SelectFilesResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SelectFilesResult',
      packedSize: 16,
      fields: [
        { name: 'picker_activity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSelectorEvent
arc.mojom.FileSelectorEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorEvent',
      packedSize: 16,
      fields: [
        { name: 'creator_task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetFileSelectorElementsRequest
arc.mojom.GetFileSelectorElementsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetFileSelectorElementsRequest',
      packedSize: 16,
      fields: [
        { name: 'creator_task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSelectorElement
arc.mojom.FileSelectorElementSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorElement',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSelectorElements
arc.mojom.FileSelectorElementsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorElements',
      packedSize: 16,
      fields: [
        { name: 'search_query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RootSize
arc.mojom.RootSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RootSize',
      packedSize: 16,
      fields: [
        { name: 'capacity_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileSession
arc.mojom.FileSessionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSession',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaStoreDownloadMetadata
arc.mojom.MediaStoreDownloadMetadataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MediaStoreDownloadMetadata',
      packedSize: 16,
      fields: [
        { name: 'relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileSystemHost
arc.mojom.FileSystemHost = {};

arc.mojom.FileSystemHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.FileSystemHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.FileSystemHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.FileSystemHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.FileSystemHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.FileSystemHost.getRemote = function() {
  let remote = new arc.mojom.FileSystemHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.FileSystemHostPtr = arc.mojom.FileSystemHostRemote;
arc.mojom.FileSystemHostRequest = arc.mojom.FileSystemHostPendingReceiver;


// Interface: FileSystemInstance
arc.mojom.FileSystemInstance = {};

arc.mojom.FileSystemInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.FileSystemInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.FileSystemInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.FileSystemInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.FileSystemInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.FileSystemInstance.getRemote = function() {
  let remote = new arc.mojom.FileSystemInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.FileSystemInstancePtr = arc.mojom.FileSystemInstanceRemote;
arc.mojom.FileSystemInstanceRequest = arc.mojom.FileSystemInstancePendingReceiver;

