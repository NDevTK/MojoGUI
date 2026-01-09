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
      packedSize: 48,
      fields: [
        { name: 'document_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'last_modified', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
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
      packedSize: 56,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'root_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'document_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'summary', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'icon', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'content_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'activity_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'action_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mime_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_file_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'initial_content_uri', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'initial_document_path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'search_query', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'task_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'openable_only', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_multiple', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'picker_activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'click_target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'creator_task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'directory_elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'file_elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'search_query', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'available_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'capacity_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'url_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'owner_package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'relative_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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

