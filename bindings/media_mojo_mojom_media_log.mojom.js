// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_log.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaLog
media.mojom.MediaLogPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaLog';
  }

  addLogRecord(event) {
    // Method: AddLogRecord
    // Call: AddLogRecord(event)
  }

};

media.mojom.MediaLogRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
