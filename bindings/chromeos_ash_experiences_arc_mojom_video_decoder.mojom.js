// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: DecoderStatus
arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};

// Struct: Buffer
arc.mojom.Buffer = class {
  constructor(values = {}) {
  }
};

// Struct: VideoDecoderConfig
arc.mojom.VideoDecoderConfig = class {
  constructor(values = {}) {
  }
};

// Interface: VideoDecoder
arc.mojom.VideoDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoDecoder';
  }

};

arc.mojom.VideoDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoDecoderClient
arc.mojom.VideoDecoderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoDecoderClient';
  }

};

arc.mojom.VideoDecoderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
