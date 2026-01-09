// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/file_system.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ChangeType
arc.mojom.ChangeType = {
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

};

arc.mojom.FileSystemInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
