// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/demuxer_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: DemuxerStream
media.mojom.DemuxerStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.DemuxerStream';
  }

  read() {
    // Method: Read
    // Call: Read()
  }

  read() {
    // Method: Read
    // Call: Read()
  }

  initialize() {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize()
      resolve({});
    });
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  read(count) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(count)
      resolve({});
    });
  }

  enableBitstreamConverter() {
    // Method: EnableBitstreamConverter
    // Call: EnableBitstreamConverter()
  }

};

media.mojom.DemuxerStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
