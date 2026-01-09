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

  initialize() {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize()
      resolve({});
    });
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
