// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FileSystemAccessChangeTypeAppeared
blink.mojom.FileSystemAccessChangeTypeAppeared = class {
  constructor(values = {}) {
  }
};

// Struct: FileSystemAccessChangeTypeDisappeared
blink.mojom.FileSystemAccessChangeTypeDisappeared = class {
  constructor(values = {}) {
  }
};

// Struct: FileSystemAccessChangeTypeErrored
blink.mojom.FileSystemAccessChangeTypeErrored = class {
  constructor(values = {}) {
  }
};

// Struct: FileSystemAccessChangeTypeModified
blink.mojom.FileSystemAccessChangeTypeModified = class {
  constructor(values = {}) {
  }
};

// Struct: FileSystemAccessChangeTypeMoved
blink.mojom.FileSystemAccessChangeTypeMoved = class {
  constructor(values = {}) {
    this.former_relative_path = values.former_relative_path !== undefined ? values.former_relative_path : "";
  }
};

// Struct: FileSystemAccessChangeTypeUnknown
blink.mojom.FileSystemAccessChangeTypeUnknown = class {
  constructor(values = {}) {
  }
};

// Struct: FileSystemAccessChangeMetadata
blink.mojom.FileSystemAccessChangeMetadata = class {
  constructor(values = {}) {
    this.relative_path = values.relative_path !== undefined ? values.relative_path : "";
  }
};

// Struct: FileSystemAccessChange
blink.mojom.FileSystemAccessChange = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Interface: FileSystemAccessObserver
blink.mojom.FileSystemAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessObserver';
  }

  onFileChanges(changes) {
    // Method: OnFileChanges
    // Call: OnFileChanges(changes)
  }

};

blink.mojom.FileSystemAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
