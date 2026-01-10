// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

arc.mojom.ChangeTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.SelectFilesActionTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.FileSelectorEventTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.MediaStoreMetadataSpec = { $: {} };
arc.mojom.DocumentSpec = { $: {} };
arc.mojom.RootSpec = { $: {} };
arc.mojom.ContentUrlWithMimeTypeSpec = { $: {} };
arc.mojom.OpenUrlsRequestSpec = { $: {} };
arc.mojom.SelectFilesRequestSpec = { $: {} };
arc.mojom.DocumentPathSpec = { $: {} };
arc.mojom.SelectFilesResultSpec = { $: {} };
arc.mojom.FileSelectorEventSpec = { $: {} };
arc.mojom.GetFileSelectorElementsRequestSpec = { $: {} };
arc.mojom.FileSelectorElementSpec = { $: {} };
arc.mojom.FileSelectorElementsSpec = { $: {} };
arc.mojom.RootSizeSpec = { $: {} };
arc.mojom.FileSessionSpec = { $: {} };
arc.mojom.MediaStoreDownloadMetadataSpec = { $: {} };
arc.mojom.FileSystemHost = {};
arc.mojom.FileSystemHost.$interfaceName = 'arc.mojom.FileSystemHost';
arc.mojom.FileSystemHost_GetFileName_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileSize_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetLastModified_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileType_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_SelectFiles_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec = { $: {} };
arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance = {};
arc.mojom.FileSystemInstance.$interfaceName = 'arc.mojom.FileSystemInstance';
arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRoots_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_Init_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec = { $: {} };
arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec = { $: {} };

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
  MinVersion: 3,
};

// Enum: FileSelectorEventType
arc.mojom.FileSelectorEventType = {
  CLICK_OK: 0,
  CLICK_DIRECTORY: 1,
  CLICK_FILE: 2,
  CLICK_CANCEL: 3,
};

// Union: MediaStoreMetadata
mojo.internal.Union(
    arc.mojom.MediaStoreMetadataSpec, 'arc.mojom.MediaStoreMetadata', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'download': {
        'ordinal': 1,
        'type': arc.mojom.MediaStoreDownloadMetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: Document
mojo.internal.Struct(
    arc.mojom.DocumentSpec, 'arc.mojom.Document', [
      mojo.internal.StructField('document_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_modified', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('android_file_system_path', 40, 0, mojo.internal.String, null, true, 5, undefined),
      mojo.internal.StructField('supports_delete', 48, 0, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('supports_rename', 48, 1, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('supports_write', 48, 2, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('dir_supports_create', 48, 3, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('supports_copy', 48, 4, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('supports_move', 48, 5, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('supports_thumbnail', 48, 6, mojo.internal.Bool, false, false, 15, undefined),
    ],
    [[0, 48], [5, 56], [12, 64], [15, 64]]);

// Struct: Root
mojo.internal.Struct(
    arc.mojom.RootSpec, 'arc.mojom.Root', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('summary', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('icon', 40, 0, arc.mojom.ArcBitmapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mime_types', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 12, undefined),
      mojo.internal.StructField('supports_create', 56, 0, mojo.internal.Bool, false, false, 12, undefined),
    ],
    [[0, 56], [12, 72]]);

// Struct: ContentUrlWithMimeType
mojo.internal.Struct(
    arc.mojom.ContentUrlWithMimeTypeSpec, 'arc.mojom.ContentUrlWithMimeType', [
      mojo.internal.StructField('content_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenUrlsRequest
mojo.internal.Struct(
    arc.mojom.OpenUrlsRequestSpec, 'arc.mojom.OpenUrlsRequest', [
      mojo.internal.StructField('action_type', 0, 0, arc.mojom.ActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activity_name', 8, 0, arc.mojom.ActivityNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('urls', 16, 0, mojo.internal.Array(arc.mojom.ContentUrlWithMimeTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('extras', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 17, undefined),
    ],
    [[0, 32], [17, 40]]);

// Struct: SelectFilesRequest
mojo.internal.Struct(
    arc.mojom.SelectFilesRequestSpec, 'arc.mojom.SelectFilesRequest', [
      mojo.internal.StructField('action_type', 0, 0, arc.mojom.SelectFilesActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_types', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('default_file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('initial_content_uri', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('initial_document_path', 32, 0, arc.mojom.DocumentPathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('search_query', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('task_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('openable_only', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_multiple', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DocumentPath
mojo.internal.Struct(
    arc.mojom.DocumentPathSpec, 'arc.mojom.DocumentPath', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('root_id', 16, 0, mojo.internal.String, null, true, 24, undefined),
    ],
    [[0, 24], [24, 32]]);

// Struct: SelectFilesResult
mojo.internal.Struct(
    arc.mojom.SelectFilesResultSpec, 'arc.mojom.SelectFilesResult', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('picker_activity', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileSelectorEvent
mojo.internal.Struct(
    arc.mojom.FileSelectorEventSpec, 'arc.mojom.FileSelectorEvent', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.FileSelectorEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('click_target', 8, 0, arc.mojom.FileSelectorElementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creator_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetFileSelectorElementsRequest
mojo.internal.Struct(
    arc.mojom.GetFileSelectorElementsRequestSpec, 'arc.mojom.GetFileSelectorElementsRequest', [
      mojo.internal.StructField('creator_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileSelectorElement
mojo.internal.Struct(
    arc.mojom.FileSelectorElementSpec, 'arc.mojom.FileSelectorElement', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileSelectorElements
mojo.internal.Struct(
    arc.mojom.FileSelectorElementsSpec, 'arc.mojom.FileSelectorElements', [
      mojo.internal.StructField('directory_elements', 0, 0, mojo.internal.Array(arc.mojom.FileSelectorElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_elements', 8, 0, mojo.internal.Array(arc.mojom.FileSelectorElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('search_query', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RootSize
mojo.internal.Struct(
    arc.mojom.RootSizeSpec, 'arc.mojom.RootSize', [
      mojo.internal.StructField('available_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('capacity_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileSession
mojo.internal.Struct(
    arc.mojom.FileSessionSpec, 'arc.mojom.FileSession', [
      mojo.internal.StructField('url_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fd', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaStoreDownloadMetadata
mojo.internal.Struct(
    arc.mojom.MediaStoreDownloadMetadataSpec, 'arc.mojom.MediaStoreDownloadMetadata', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('owner_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('relative_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemHost
mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileName_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileName_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileName_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileSize_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileSize_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetLastModified_ParamsSpec, 'arc.mojom.FileSystemHost_GetLastModified_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetLastModified_ResponseParams', [
      mojo.internal.StructField('last_modified', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileType_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileType_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileType_ResponseParams', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec, 'arc.mojom.FileSystemHost_OnDocumentChanged_Params', [
      mojo.internal.StructField('watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, arc.mojom.ChangeTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec, 'arc.mojom.FileSystemHost_OnRootsChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec, 'arc.mojom.FileSystemHost_GetVirtualFileId_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec, 'arc.mojom.FileSystemHost_HandleIdReleased_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec, 'arc.mojom.FileSystemHost_HandleIdReleased_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec, 'arc.mojom.FileSystemHost_OpenFileToRead_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec, 'arc.mojom.FileSystemHost_OpenFileToRead_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_SelectFiles_ParamsSpec, 'arc.mojom.FileSystemHost_SelectFiles_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.SelectFilesRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec, 'arc.mojom.FileSystemHost_SelectFiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.SelectFilesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec, 'arc.mojom.FileSystemHost_OnFileSelectorEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.FileSelectorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec, 'arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec, 'arc.mojom.FileSystemHost_GetFileSelectorElements_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.GetFileSelectorElementsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec, 'arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParams', [
      mojo.internal.StructField('elements', 0, 0, arc.mojom.FileSelectorElementsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec, 'arc.mojom.FileSystemHost_OnMediaStoreUriAdded_Params', [
      mojo.internal.StructField('uri', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, arc.mojom.MediaStoreMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec, 'arc.mojom.FileSystemHost_CreateMoniker_Params', [
      mojo.internal.StructField('content_uri', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('read_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec, 'arc.mojom.FileSystemHost_CreateMoniker_ResponseParams', [
      mojo.internal.StructField('moniker', 0, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec, 'arc.mojom.FileSystemHost_DestroyMoniker_Params', [
      mojo.internal.StructField('moniker', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec, 'arc.mojom.FileSystemHost_DestroyMoniker_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

  getFileName(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.FileSystemHost_GetFileName_ParamsSpec,
      arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec,
      [url],
      false);
  }

  getFileSize(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.FileSystemHost_GetFileSize_ParamsSpec,
      arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec,
      [url],
      false);
  }

  getLastModified(url) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.FileSystemHost_GetLastModified_ParamsSpec,
      arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec,
      [url],
      false);
  }

  getFileType(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.FileSystemHost_GetFileType_ParamsSpec,
      arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec,
      [url],
      false);
  }

  onDocumentChanged(watcher_id, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec,
      null,
      [watcher_id, type],
      false);
  }

  onRootsChanged() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec,
      null,
      [],
      false);
  }

  getVirtualFileId(url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec,
      arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec,
      [url],
      false);
  }

  handleIdReleased(id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec,
      arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec,
      [id],
      false);
  }

  openFileToRead(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec,
      arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec,
      [url],
      false);
  }

  selectFiles(request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.FileSystemHost_SelectFiles_ParamsSpec,
      arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec,
      [request],
      false);
  }

  onFileSelectorEvent(event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec,
      arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec,
      [event],
      false);
  }

  getFileSelectorElements(request) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec,
      arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec,
      [request],
      false);
  }

  onMediaStoreUriAdded(uri, metadata) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec,
      null,
      [uri, metadata],
      false);
  }

  createMoniker(content_uri, read_only) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec,
      arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec,
      [content_uri, read_only],
      false);
  }

  destroyMoniker(moniker) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec,
      arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec,
      [moniker],
      false);
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

arc.mojom.FileSystemHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.FileSystemHost_GetFileName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileName(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetFileName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.FileSystemHost_GetFileSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileSize(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetFileSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = arc.mojom.FileSystemHost_GetLastModified_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLastModified(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetLastModified_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.FileSystemHost_GetFileType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileType(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetFileType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 0: {
          const params = arc.mojom.FileSystemHost_OnDocumentChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDocumentChanged(params.watcher_id, params.type);
          break;
        }
        case 6: {
          const params = arc.mojom.FileSystemHost_OnRootsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRootsChanged();
          break;
        }
        case 9: {
          const params = arc.mojom.FileSystemHost_GetVirtualFileId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVirtualFileId(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetVirtualFileId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = arc.mojom.FileSystemHost_HandleIdReleased_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleIdReleased(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_HandleIdReleased_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.FileSystemHost_OpenFileToRead_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFileToRead(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_OpenFileToRead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = arc.mojom.FileSystemHost_SelectFiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectFiles(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_SelectFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = arc.mojom.FileSystemHost_OnFileSelectorEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFileSelectorEvent(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_OnFileSelectorEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = arc.mojom.FileSystemHost_GetFileSelectorElements_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileSelectorElements(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_GetFileSelectorElements_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = arc.mojom.FileSystemHost_OnMediaStoreUriAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMediaStoreUriAdded(params.uri, params.metadata);
          break;
        }
        case 13: {
          const params = arc.mojom.FileSystemHost_CreateMoniker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createMoniker(params.content_uri, params.read_only);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_CreateMoniker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = arc.mojom.FileSystemHost_DestroyMoniker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.destroyMoniker(params.moniker);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemHost_DestroyMoniker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.FileSystemHostReceiver = arc.mojom.FileSystemHostReceiver;

arc.mojom.FileSystemHostPtr = arc.mojom.FileSystemHostRemote;
arc.mojom.FileSystemHostRequest = arc.mojom.FileSystemHostPendingReceiver;


// Interface: FileSystemInstance
mojo.internal.Struct(
    arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec, 'arc.mojom.FileSystemInstance_AddWatcher_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_AddWatcher_ResponseParams', [
      mojo.internal.StructField('watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec, 'arc.mojom.FileSystemInstance_GetChildDocuments_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParams', [
      mojo.internal.StructField('documents', 0, 0, mojo.internal.Array(arc.mojom.DocumentSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_GetDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetDocument_ResponseParams', [
      mojo.internal.StructField('document', 0, 0, arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec, 'arc.mojom.FileSystemInstance_GetFileSize_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetFileSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec, 'arc.mojom.FileSystemInstance_GetMimeType_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetMimeType_ResponseParams', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRecentDocuments_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParams', [
      mojo.internal.StructField('documents', 0, 0, mojo.internal.Array(arc.mojom.DocumentSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRoots_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRoots_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRoots_ResponseParams', [
      mojo.internal.StructField('roots', 0, 0, mojo.internal.Array(arc.mojom.RootSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec, 'arc.mojom.FileSystemInstance_GetRootSize_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_GetRootSize_ResponseParams', [
      mojo.internal.StructField('root_size', 0, 0, arc.mojom.RootSizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_DeleteDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_DeleteDocument_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_RenameDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_RenameDocument_ResponseParams', [
      mojo.internal.StructField('document', 0, 0, arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_CreateDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_CreateDocument_ResponseParams', [
      mojo.internal.StructField('document', 0, 0, arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_CopyDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_parent_document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_CopyDocument_ResponseParams', [
      mojo.internal.StructField('document', 0, 0, arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec, 'arc.mojom.FileSystemInstance_MoveDocument_Params', [
      mojo.internal.StructField('authority', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_parent_document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_parent_document_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_MoveDocument_ResponseParams', [
      mojo.internal.StructField('document', 0, 0, arc.mojom.DocumentSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_Init_ParamsSpec, 'arc.mojom.FileSystemInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.FileSystemHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_Init_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenThumbnail_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size_hint', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec, 'arc.mojom.FileSystemInstance_CloseFileSession_Params', [
      mojo.internal.StructField('url_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToWrite_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParams', [
      mojo.internal.StructField('file_session', 0, 0, arc.mojom.FileSessionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToRead_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParams', [
      mojo.internal.StructField('file_session', 0, 0, arc.mojom.FileSessionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec, 'arc.mojom.FileSystemInstance_RemoveWatcher_Params', [
      mojo.internal.StructField('watcher_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec, 'arc.mojom.FileSystemInstance_RequestMediaScan_Params', [
      mojo.internal.StructField('paths', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec, 'arc.mojom.FileSystemInstance_ReindexDirectory_Params', [
      mojo.internal.StructField('directory_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec, 'arc.mojom.FileSystemInstance_RequestFileRemovalScan_Params', [
      mojo.internal.StructField('directory_paths', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec, 'arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.OpenUrlsRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_info', 8, 0, arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec, 'arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParams', [
    ],
    [[0, 8]]);

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

  addWatcher(authority, document_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec,
      arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec,
      [authority, document_id],
      false);
  }

  getChildDocuments(authority, parent_document_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec,
      arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec,
      [authority, parent_document_id],
      false);
  }

  getDocument(authority, document_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.FileSystemInstance_GetDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec,
      [authority, document_id],
      false);
  }

  getFileSize(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec,
      arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec,
      [url],
      false);
  }

  getMimeType(url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec,
      arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec,
      [url],
      false);
  }

  getRecentDocuments(authority, root_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec,
      arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec,
      [authority, root_id],
      false);
  }

  getRoots() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.FileSystemInstance_GetRoots_ParamsSpec,
      arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec,
      [],
      false);
  }

  getRootSize(authority, root_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec,
      arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec,
      [authority, root_id],
      false);
  }

  deleteDocument(authority, document_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec,
      [authority, document_id],
      false);
  }

  renameDocument(authority, document_id, display_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec,
      [authority, document_id, display_name],
      false);
  }

  createDocument(authority, parent_document_id, mime_type, display_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec,
      [authority, parent_document_id, mime_type, display_name],
      false);
  }

  copyDocument(authority, source_document_id, target_parent_document_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec,
      [authority, source_document_id, target_parent_document_id],
      false);
  }

  moveDocument(authority, source_document_id, source_parent_document_id, target_parent_document_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec,
      arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec,
      [authority, source_document_id, source_parent_document_id, target_parent_document_id],
      false);
  }

  init(host_remote) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.FileSystemInstance_Init_ParamsSpec,
      arc.mojom.FileSystemInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  openThumbnail(url, size_hint) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec,
      arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec,
      [url, size_hint],
      false);
  }

  closeFileSession(url_id, error_message) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec,
      null,
      [url_id, error_message],
      false);
  }

  openFileSessionToWrite(url) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec,
      arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec,
      [url],
      false);
  }

  openFileSessionToRead(url) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec,
      arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec,
      [url],
      false);
  }

  removeWatcher(watcher_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec,
      arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec,
      [watcher_id],
      false);
  }

  requestMediaScan(paths) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec,
      null,
      [paths],
      false);
  }

  reindexDirectory(directory_path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec,
      null,
      [directory_path],
      false);
  }

  requestFileRemovalScan(directory_paths) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec,
      null,
      [directory_paths],
      false);
  }

  openUrlsWithPermissionAndWindowInfo(request, window_info) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec,
      arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec,
      [request, window_info],
      false);
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

arc.mojom.FileSystemInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 6: {
          const params = arc.mojom.FileSystemInstance_AddWatcher_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addWatcher(params.authority, params.document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_AddWatcher_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.FileSystemInstance_GetChildDocuments_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getChildDocuments(params.authority, params.parent_document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetChildDocuments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.FileSystemInstance_GetDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDocument(params.authority, params.document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.FileSystemInstance_GetFileSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileSize(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetFileSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = arc.mojom.FileSystemInstance_GetMimeType_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMimeType(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetMimeType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = arc.mojom.FileSystemInstance_GetRecentDocuments_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRecentDocuments(params.authority, params.root_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetRecentDocuments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = arc.mojom.FileSystemInstance_GetRoots_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRoots();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetRoots_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = arc.mojom.FileSystemInstance_GetRootSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRootSize(params.authority, params.root_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_GetRootSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = arc.mojom.FileSystemInstance_DeleteDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteDocument(params.authority, params.document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_DeleteDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = arc.mojom.FileSystemInstance_RenameDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renameDocument(params.authority, params.document_id, params.display_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_RenameDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = arc.mojom.FileSystemInstance_CreateDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDocument(params.authority, params.parent_document_id, params.mime_type, params.display_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_CreateDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = arc.mojom.FileSystemInstance_CopyDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copyDocument(params.authority, params.source_document_id, params.target_parent_document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_CopyDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = arc.mojom.FileSystemInstance_MoveDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveDocument(params.authority, params.source_document_id, params.source_parent_document_id, params.target_parent_document_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_MoveDocument_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = arc.mojom.FileSystemInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const params = arc.mojom.FileSystemInstance_OpenThumbnail_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openThumbnail(params.url, params.size_hint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_OpenThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const params = arc.mojom.FileSystemInstance_CloseFileSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeFileSession(params.url_id, params.error_message);
          break;
        }
        case 25: {
          const params = arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFileSessionToWrite(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_OpenFileSessionToWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const params = arc.mojom.FileSystemInstance_OpenFileSessionToRead_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFileSessionToRead(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_OpenFileSessionToRead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = arc.mojom.FileSystemInstance_RemoveWatcher_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeWatcher(params.watcher_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_RemoveWatcher_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 0: {
          const params = arc.mojom.FileSystemInstance_RequestMediaScan_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestMediaScan(params.paths);
          break;
        }
        case 19: {
          const params = arc.mojom.FileSystemInstance_ReindexDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reindexDirectory(params.directory_path);
          break;
        }
        case 20: {
          const params = arc.mojom.FileSystemInstance_RequestFileRemovalScan_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestFileRemovalScan(params.directory_paths);
          break;
        }
        case 23: {
          const params = arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openUrlsWithPermissionAndWindowInfo(params.request, params.window_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.FileSystemInstance_OpenUrlsWithPermissionAndWindowInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.FileSystemInstanceReceiver = arc.mojom.FileSystemInstanceReceiver;

arc.mojom.FileSystemInstancePtr = arc.mojom.FileSystemInstanceRemote;
arc.mojom.FileSystemInstanceRequest = arc.mojom.FileSystemInstancePendingReceiver;

