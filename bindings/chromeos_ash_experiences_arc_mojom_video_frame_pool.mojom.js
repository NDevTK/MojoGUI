// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_frame_pool.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: VideoFrame
arc.mojom.VideoFrame = class {
  constructor(values = {}) {
    this.modifier@5 = values.modifier@5 !== undefined ? values.modifier@5 : 0;
  }
};

// Interface: VideoFramePool
arc.mojom.VideoFramePoolPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoFramePool';
  }

};

arc.mojom.VideoFramePoolRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoFramePoolClient
arc.mojom.VideoFramePoolClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoFramePoolClient';
  }

};

arc.mojom.VideoFramePoolClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
