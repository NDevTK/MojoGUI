// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var url = url || {};


// Enum: ChangeType
arc.mojom.mojom.ChangeType = {
  CHANGED: 0,
  DELETED: 1,
};
arc.mojom.mojom.ChangeTypeSpec = { $: mojo.internal.Enum() };

// Enum: SelectFilesActionType
arc.mojom.mojom.SelectFilesActionType = {
  GET_CONTENT: 0,
  OPEN_DOCUMENT: 1,
  OPEN_DOCUMENT_TREE: 2,
  CREATE_DOCUMENT: 3,
};
arc.mojom.mojom.SelectFilesActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: FileSelectorEventType
arc.mojom.mojom.FileSelectorEventType = {
  CLICK_OK: 0,
  CLICK_DIRECTORY: 1,
  CLICK_FILE: 2,
  CLICK_CANCEL: 3,
};
arc.mojom.mojom.FileSelectorEventTypeSpec = { $: mojo.internal.Enum() };

// Union: MediaStoreMetadata
arc.mojom.mojom.MediaStoreMetadataSpec = { $: mojo.internal.Union(
    'arc.mojom.MediaStoreMetadata', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'download': {
        'ordinal': 1,
        'type': arc.mojom.MediaStoreDownloadMetadataSpec,
      }},
    })
};

// Struct: Document
arc.mojom.mojom.DocumentSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Document',
      packedSize: 64,
      fields: [
        { name: 'document_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'last_modified', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'android_file_system_path', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 5 },
        { name: 'supports_delete', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'supports_rename', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'supports_write', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'dir_supports_create', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'supports_copy', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'supports_move', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'supports_thumbnail', packedOffset: 48, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 15 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 5, packedSize: 56}, {version: 12, packedSize: 64}, {version: 15, packedSize: 64}]
    }
  }
};

// Struct: Root
arc.mojom.mojom.RootSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Root',
      packedSize: 72,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'root_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'summary', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'icon', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 0 },
        { name: 'supports_create', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'mime_types', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 12 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 12, packedSize: 72}]
    }
  }
};

// Struct: ContentUrlWithMimeType
arc.mojom.mojom.ContentUrlWithMimeTypeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ContentUrlWithMimeType',
      packedSize: 24,
      fields: [
        { name: 'content_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OpenUrlsRequest
arc.mojom.mojom.OpenUrlsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OpenUrlsRequest',
      packedSize: 40,
      fields: [
        { name: 'action_type', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'activity_name', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ActivityNameSpec, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ContentUrlWithMimeTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'extras', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 17 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 17, packedSize: 40}]
    }
  }
};

// Struct: SelectFilesRequest
arc.mojom.mojom.SelectFilesRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SelectFilesRequest',
      packedSize: 64,
      fields: [
        { name: 'action_type', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.SelectFilesActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'mime_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'openable_only', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_multiple', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'default_file_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'initial_content_uri', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'initial_document_path', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.DocumentPathSpec, nullable: true, minVersion: 0 },
        { name: 'task_id', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'search_query', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: DocumentPath
arc.mojom.mojom.DocumentPathSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DocumentPath',
      packedSize: 32,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'root_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 24 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 24, packedSize: 32}]
    }
  }
};

// Struct: SelectFilesResult
arc.mojom.mojom.SelectFilesResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SelectFilesResult',
      packedSize: 24,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'picker_activity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FileSelectorEvent
arc.mojom.mojom.FileSelectorEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorEvent',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.FileSelectorEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'click_target', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FileSelectorElementSpec, nullable: false, minVersion: 0 },
        { name: 'creator_task_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GetFileSelectorElementsRequest
arc.mojom.mojom.GetFileSelectorElementsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetFileSelectorElementsRequest',
      packedSize: 16,
      fields: [
        { name: 'creator_task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileSelectorElement
arc.mojom.mojom.FileSelectorElementSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorElement',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FileSelectorElements
arc.mojom.mojom.FileSelectorElementsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSelectorElements',
      packedSize: 32,
      fields: [
        { name: 'directory_elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.FileSelectorElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'file_elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.FileSelectorElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'search_query', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RootSize
arc.mojom.mojom.RootSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RootSize',
      packedSize: 24,
      fields: [
        { name: 'available_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'capacity_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FileSession
arc.mojom.mojom.FileSessionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSession',
      packedSize: 24,
      fields: [
        { name: 'url_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaStoreDownloadMetadata
arc.mojom.mojom.MediaStoreDownloadMetadataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MediaStoreDownloadMetadata',
      packedSize: 32,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'owner_package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'relative_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FileSystemHost
arc.mojom.mojom.FileSystemHost = {};

arc.mojom.mojom.FileSystemHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.FileSystemHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.FileSystemHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.FileSystemHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.FileSystemHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFileName(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetFileName_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetFileName_ResponseParamsSpec,
      [url]);
  }

  getFileSize(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetFileSize_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec,
      [url]);
  }

  getLastModified(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetLastModified_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec,
      [url]);
  }

  getFileType(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetFileType_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetFileType_ResponseParamsSpec,
      [url]);
  }

  onDocumentChanged(watcher_id, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec,
      null,
      [watcher_id, type]);
  }

  onRootsChanged() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.FileSystemHost_OnRootsChanged_ParamsSpec,
      null,
      []);
  }

  getVirtualFileId(url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec,
      [url]);
  }

  handleIdReleased(id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.FileSystemHost_HandleIdReleased_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec,
      [id]);
  }

  openFileToRead(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.FileSystemHost_OpenFileToRead_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec,
      [url]);
  }

  selectFiles(request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.FileSystemHost_SelectFiles_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec,
      [request]);
  }

  onFileSelectorEvent(event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec,
      null,
      [event]);
  }

  getFileSelectorElements(request) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec,
      [request]);
  }

  onMediaStoreUriAdded(uri, metadata) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec,
      null,
      [uri, metadata]);
  }

  createMoniker(content_uri, read_only) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.FileSystemHost_CreateMoniker_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec,
      [content_uri, read_only]);
  }

  destroyMoniker(moniker) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.mojom.FileSystemHost_DestroyMoniker_ParamsSpec,
      arc.mojom.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec,
      [moniker]);
  }

};

arc.mojom.mojom.FileSystemHost.getRemote = function() {
  let remote = new arc.mojom.mojom.FileSystemHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetFileName
arc.mojom.mojom.FileSystemHost_GetFileName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileName_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetFileName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileSize
arc.mojom.mojom.FileSystemHost_GetFileSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileSize_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLastModified
arc.mojom.mojom.FileSystemHost_GetLastModified_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetLastModified_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetLastModified_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'last_modified', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileType
arc.mojom.mojom.FileSystemHost_GetFileType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileType_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetFileType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDocumentChanged
arc.mojom.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OnDocumentChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'watcher_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ChangeTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnRootsChanged
arc.mojom.mojom.FileSystemHost_OnRootsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OnRootsChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetVirtualFileId
arc.mojom.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetVirtualFileId_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetVirtualFileId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleIdReleased
arc.mojom.mojom.FileSystemHost_HandleIdReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.HandleIdReleased_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.HandleIdReleased_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFileToRead
arc.mojom.mojom.FileSystemHost_OpenFileToRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OpenFileToRead_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OpenFileToRead_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectFiles
arc.mojom.mojom.FileSystemHost_SelectFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.SelectFiles_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SelectFilesRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.SelectFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SelectFilesResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFileSelectorEvent
arc.mojom.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OnFileSelectorEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FileSelectorEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileSelectorElements
arc.mojom.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileSelectorElements_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetFileSelectorElementsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.GetFileSelectorElements_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FileSelectorElementsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMediaStoreUriAdded
arc.mojom.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.OnMediaStoreUriAdded_Params',
      packedSize: 32,
      fields: [
        { name: 'uri', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MediaStoreMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CreateMoniker
arc.mojom.mojom.FileSystemHost_CreateMoniker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.CreateMoniker_Params',
      packedSize: 24,
      fields: [
        { name: 'content_uri', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'read_only', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.CreateMoniker_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'moniker', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DestroyMoniker
arc.mojom.mojom.FileSystemHost_DestroyMoniker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.DestroyMoniker_Params',
      packedSize: 16,
      fields: [
        { name: 'moniker', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemHost.DestroyMoniker_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.FileSystemHostPtr = arc.mojom.mojom.FileSystemHostRemote;
arc.mojom.mojom.FileSystemHostRequest = arc.mojom.mojom.FileSystemHostPendingReceiver;


// Interface: FileSystemInstance
arc.mojom.mojom.FileSystemInstance = {};

arc.mojom.mojom.FileSystemInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.FileSystemInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.FileSystemInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.FileSystemInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.FileSystemInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.FileSystemInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addWatcher(authority, document_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.FileSystemInstance_AddWatcher_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec,
      [authority, document_id]);
  }

  getChildDocuments(authority, parent_document_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec,
      [authority, parent_document_id]);
  }

  getDocument(authority, document_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec,
      [authority, document_id]);
  }

  getFileSize(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetFileSize_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec,
      [url]);
  }

  getMimeType(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetMimeType_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec,
      [url]);
  }

  getRecentDocuments(authority, root_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec,
      [authority, root_id]);
  }

  getRoots() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetRoots_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec,
      []);
  }

  getRootSize(authority, root_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.mojom.FileSystemInstance_GetRootSize_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec,
      [authority, root_id]);
  }

  deleteDocument(authority, document_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.FileSystemInstance_DeleteDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec,
      [authority, document_id]);
  }

  renameDocument(authority, document_id, display_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.mojom.FileSystemInstance_RenameDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec,
      [authority, document_id, display_name]);
  }

  createDocument(authority, parent_document_id, mime_type, display_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.mojom.FileSystemInstance_CreateDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec,
      [authority, parent_document_id, mime_type, display_name]);
  }

  copyDocument(authority, source_document_id, target_parent_document_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.mojom.FileSystemInstance_CopyDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec,
      [authority, source_document_id, target_parent_document_id]);
  }

  moveDocument(authority, source_document_id, source_parent_document_id, target_parent_document_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.mojom.FileSystemInstance_MoveDocument_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec,
      [authority, source_document_id, source_parent_document_id, target_parent_document_id]);
  }

  init(host_remote) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.FileSystemInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  openThumbnail(url, size_hint) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec,
      [url, size_hint]);
  }

  closeFileSession(url_id, error_message) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.mojom.FileSystemInstance_CloseFileSession_ParamsSpec,
      null,
      [url_id, error_message]);
  }

  openFileSessionToWrite(url) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec,
      [url]);
  }

  openFileSessionToRead(url) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec,
      [url]);
  }

  removeWatcher(watcher_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec,
      arc.mojom.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec,
      [watcher_id]);
  }

  requestMediaScan(paths) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec,
      null,
      [paths]);
  }

  reindexDirectory(directory_path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec,
      null,
      [directory_path]);
  }

  requestFileRemovalScan(directory_paths) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec,
      null,
      [directory_paths]);
  }

  openUrlsWithPermissionAndWindowInfo(request, window_info) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec,
      null,
      [request, window_info]);
  }

};

arc.mojom.mojom.FileSystemInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.FileSystemInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.FileSystemInstance',
    'context');
  return remote.$;
};

// ParamsSpec for AddWatcher
arc.mojom.mojom.FileSystemInstance_AddWatcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.AddWatcher_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.AddWatcher_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'watcher_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetChildDocuments
arc.mojom.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetChildDocuments_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parent_document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetChildDocuments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'documents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.DocumentSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDocument
arc.mojom.mojom.FileSystemInstance_GetDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DocumentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileSize
arc.mojom.mojom.FileSystemInstance_GetFileSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetFileSize_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetFileSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMimeType
arc.mojom.mojom.FileSystemInstance_GetMimeType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetMimeType_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetMimeType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRecentDocuments
arc.mojom.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRecentDocuments_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'root_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRecentDocuments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'documents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.DocumentSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRoots
arc.mojom.mojom.FileSystemInstance_GetRoots_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRoots_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRoots_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'roots', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.RootSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRootSize
arc.mojom.mojom.FileSystemInstance_GetRootSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRootSize_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'root_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.GetRootSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'root_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RootSizeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteDocument
arc.mojom.mojom.FileSystemInstance_DeleteDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.DeleteDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.DeleteDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenameDocument
arc.mojom.mojom.FileSystemInstance_RenameDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RenameDocument_Params',
      packedSize: 32,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RenameDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DocumentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDocument
arc.mojom.mojom.FileSystemInstance_CreateDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.CreateDocument_Params',
      packedSize: 40,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parent_document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.CreateDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DocumentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CopyDocument
arc.mojom.mojom.FileSystemInstance_CopyDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.CopyDocument_Params',
      packedSize: 32,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_parent_document_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.CopyDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DocumentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveDocument
arc.mojom.mojom.FileSystemInstance_MoveDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.MoveDocument_Params',
      packedSize: 40,
      fields: [
        { name: 'authority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_parent_document_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_parent_document_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.MoveDocument_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DocumentSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Init
arc.mojom.mojom.FileSystemInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.FileSystemHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenThumbnail
arc.mojom.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size_hint', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseFileSession
arc.mojom.mojom.FileSystemInstance_CloseFileSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.CloseFileSession_Params',
      packedSize: 24,
      fields: [
        { name: 'url_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenFileSessionToWrite
arc.mojom.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenFileSessionToWrite_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenFileSessionToWrite_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_session', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FileSessionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFileSessionToRead
arc.mojom.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenFileSessionToRead_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenFileSessionToRead_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_session', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FileSessionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveWatcher
arc.mojom.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RemoveWatcher_Params',
      packedSize: 16,
      fields: [
        { name: 'watcher_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RemoveWatcher_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestMediaScan
arc.mojom.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RequestMediaScan_Params',
      packedSize: 16,
      fields: [
        { name: 'paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReindexDirectory
arc.mojom.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.ReindexDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestFileRemovalScan
arc.mojom.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.RequestFileRemovalScan_Params',
      packedSize: 16,
      fields: [
        { name: 'directory_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenUrlsWithPermissionAndWindowInfo
arc.mojom.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FileSystemInstance.OpenUrlsWithPermissionAndWindowInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OpenUrlsRequestSpec, nullable: false, minVersion: 0 },
        { name: 'window_info', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.WindowInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.FileSystemInstancePtr = arc.mojom.mojom.FileSystemInstanceRemote;
arc.mojom.mojom.FileSystemInstanceRequest = arc.mojom.mojom.FileSystemInstancePendingReceiver;

