// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ChangeType
arc.mojom.ChangeType = {
  the: 0,
};

// Enum: SelectFilesActionType
arc.mojom.SelectFilesActionType = {
  GET_CONTENT: 0,
};

// Enum: FileSelectorEventType
arc.mojom.FileSelectorEventType = {
  CLICK_OK: 0,
};

// Struct: Document
arc.mojom.Document = class {
  constructor(values = {}) {
    this.mime_type = values.mime_type !== undefined ? values.mime_type : "";
    this.size = values.size !== undefined ? values.size : 0;
    this.last_modified = values.last_modified !== undefined ? values.last_modified : 0;
    this.supports_thumbnail = values.supports_thumbnail !== undefined ? values.supports_thumbnail : false;
  }
};

// Struct: Root
arc.mojom.Root = class {
  constructor(values = {}) {
    this.document_id = values.document_id !== undefined ? values.document_id : "";
    this.title = values.title !== undefined ? values.title : "";
    this.summary = values.summary !== undefined ? values.summary : "";
    this.mime_types = values.mime_types !== undefined ? values.mime_types : false;
  }
};

// Struct: ContentUrlWithMimeType
arc.mojom.ContentUrlWithMimeType = class {
  constructor(values = {}) {
    this.mime_type = values.mime_type !== undefined ? values.mime_type : "";
  }
};

// Struct: OpenUrlsRequest
arc.mojom.OpenUrlsRequest = class {
  constructor(values = {}) {
    this.extras = values.extras !== undefined ? values.extras : "";
  }
};

// Struct: SelectFilesRequest
arc.mojom.SelectFilesRequest = class {
  constructor(values = {}) {
    this.action_type = values.action_type !== undefined ? values.action_type : null;
    this.mime_types = values.mime_types !== undefined ? values.mime_types : "";
    this.openable_only = values.openable_only !== undefined ? values.openable_only : false;
    this.search_query = values.search_query !== undefined ? values.search_query : 0;
  }
};

// Struct: DocumentPath
arc.mojom.DocumentPath = class {
  constructor(values = {}) {
    this.root_id = values.root_id !== undefined ? values.root_id : "";
  }
};

// Struct: SelectFilesResult
arc.mojom.SelectFilesResult = class {
  constructor(values = {}) {
    this.picker_activity = values.picker_activity !== undefined ? values.picker_activity : "";
  }
};

// Struct: FileSelectorEvent
arc.mojom.FileSelectorEvent = class {
  constructor(values = {}) {
    this.creator_task_id = values.creator_task_id !== undefined ? values.creator_task_id : 0;
  }
};

// Struct: GetFileSelectorElementsRequest
arc.mojom.GetFileSelectorElementsRequest = class {
  constructor(values = {}) {
    this.creator_task_id = values.creator_task_id !== undefined ? values.creator_task_id : 0;
  }
};

// Struct: FileSelectorElement
arc.mojom.FileSelectorElement = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: FileSelectorElements
arc.mojom.FileSelectorElements = class {
  constructor(values = {}) {
    this.search_query = values.search_query !== undefined ? values.search_query : "";
  }
};

// Struct: RootSize
arc.mojom.RootSize = class {
  constructor(values = {}) {
    this.capacity_bytes = values.capacity_bytes !== undefined ? values.capacity_bytes : 0;
  }
};

// Struct: FileSession
arc.mojom.FileSession = class {
  constructor(values = {}) {
    this.fd = values.fd !== undefined ? values.fd : "";
  }
};

// Struct: MediaStoreDownloadMetadata
arc.mojom.MediaStoreDownloadMetadata = class {
  constructor(values = {}) {
    this.owner_package_name = values.owner_package_name !== undefined ? values.owner_package_name : "";
    this.relative_path = values.relative_path !== undefined ? values.relative_path : null;
  }
};

// Interface: FileSystemHost
arc.mojom.FileSystemHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.FileSystemHost';
  }

  1(url) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(url)
      resolve({});
    });
  }

  unknown(and) {
    // Method: unknown
    // Call: unknown(and)
  }

  2(url) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(url)
      resolve({});
    });
  }

  11(url) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(url)
      resolve({});
    });
  }

  3(url) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(url)
      resolve({});
    });
  }

  0(watcher_id, type) {
    // Method: 0
    // Call: 0(watcher_id, type)
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  9(url) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(url)
      resolve({});
    });
  }

  getVirtualFileId() {
    // Method: GetVirtualFileId
    // Call: GetVirtualFileId()
  }

  10(id) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(id)
      resolve({});
    });
  }

  4(url) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(url)
      resolve({});
    });
  }

  5(request) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(request)
      resolve({});
    });
  }

  tests() {
    // Method: tests
    // Call: tests()
  }

  7(event) {
    // Method: 7
    // Call: 7(event)
  }

  tests() {
    // Method: tests
    // Call: tests()
  }

  8(request) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(request)
      resolve({});
    });
  }

  12(uri, metadata) {
    // Method: 12
    // Call: 12(uri, metadata)
  }

  destroyMoniker() {
    // Method: DestroyMoniker
    // Call: DestroyMoniker()
  }

  13(content_uri, read_only) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(content_uri, read_only)
      resolve({});
    });
  }

  destroyMoniker() {
    // Method: DestroyMoniker
    // Call: DestroyMoniker()
  }

  14(moniker) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(moniker)
      resolve({});
    });
  }

};

arc.mojom.FileSystemHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileSystemInstance
arc.mojom.FileSystemInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.FileSystemInstance';
  }

  onDocumentChanged() {
    // Method: OnDocumentChanged
    // Call: OnDocumentChanged()
  }

  6(authority, document_id) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(authority, document_id)
      resolve({});
    });
  }

  4(authority, parent_document_id) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(authority, parent_document_id)
      resolve({});
    });
  }

  3(authority, document_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(authority, document_id)
      resolve({});
    });
  }

  unknown(and) {
    // Method: unknown
    // Call: unknown(and)
  }

  1(url) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(url)
      resolve({});
    });
  }

  8(url) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(url)
      resolve({});
    });
  }

  a() {
    // Method: a
    // Call: a()
  }

  9(authority, root_id) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(authority, root_id)
      resolve({});
    });
  }

  getRoots() {
    // Method: GetRoots
    // Call: GetRoots()
  }

  12() {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12()
      resolve({});
    });
  }

  22(authority, root_id) {
    // Method: 22
    return new Promise((resolve) => {
      // Call: 22(authority, root_id)
      resolve({});
    });
  }

  13(authority, document_id) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(authority, document_id)
      resolve({});
    });
  }

  14(authority, document_id, display_name) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(authority, document_id, display_name)
      resolve({});
    });
  }

  15(authority, parent_document_id, mime_type, display_name) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(authority, parent_document_id, mime_type, display_name)
      resolve({});
    });
  }

  16(authority, source_document_id, target_parent_document_id) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(authority, source_document_id, target_parent_document_id)
      resolve({});
    });
  }

  17(authority, source_document_id, source_parent_document_id, target_parent_document_id) {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17(authority, source_document_id, source_parent_document_id, target_parent_document_id)
      resolve({});
    });
  }

  10(host_remote) {
    // Method: 10
    // Call: 10(host_remote)
  }

  size(height) {
    // Method: size
    // Call: size(height)
  }

  21(url, size_hint) {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21(url, size_hint)
      resolve({});
    });
  }

  24(url_id, error_message) {
    // Method: 24
    // Call: 24(url_id, error_message)
  }

  25(url) {
    // Method: 25
    return new Promise((resolve) => {
      // Call: 25(url)
      resolve({});
    });
  }

  26(url) {
    // Method: 26
    return new Promise((resolve) => {
      // Call: 26(url)
      resolve({});
    });
  }

  onDocumentChanged() {
    // Method: OnDocumentChanged
    // Call: OnDocumentChanged()
  }

  onDocumentChanged() {
    // Method: OnDocumentChanged
    // Call: OnDocumentChanged()
  }

  7(watcher_id) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(watcher_id)
      resolve({});
    });
  }

  0(paths) {
    // Method: 0
    // Call: 0(paths)
  }

  19(directory_path) {
    // Method: 19
    // Call: 19(directory_path)
  }

  20(directory_paths) {
    // Method: 20
    // Call: 20(directory_paths)
  }

  23(request, window_info) {
    // Method: 23
    // Call: 23(request, window_info)
  }

};

arc.mojom.FileSystemInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
