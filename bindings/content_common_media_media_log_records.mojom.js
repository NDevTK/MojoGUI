// Auto-generated MojoJS binding
// Source: chromium_src/content/common/media/media_log_records.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MediaInternalLogRecords
content.mojom.MediaInternalLogRecordsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.MediaInternalLogRecords';
  }

  log(events) {
    // Method: Log
    // Call: Log(events)
  }

};

content.mojom.MediaInternalLogRecordsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
