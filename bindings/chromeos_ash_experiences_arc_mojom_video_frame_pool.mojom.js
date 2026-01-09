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

  0(client) {
    // Method: 0
    // Call: 0(client)
  }

  1(video_frame) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(video_frame)
      resolve({});
    });
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

  addVideoFrame() {
    // Method: AddVideoFrame
    // Call: AddVideoFrame()
  }

  addVideoFrame() {
    // Method: AddVideoFrame
    // Call: AddVideoFrame()
  }

  addVideoFrame() {
    // Method: AddVideoFrame
    // Call: AddVideoFrame()
  }

  requestVideoFrames() {
    // Method: RequestVideoFrames
    // Call: RequestVideoFrames()
  }

  addVideoFrame() {
    // Method: AddVideoFrame
    // Call: AddVideoFrame()
  }

  1(format, coded_size, visible_rect, num_frames) {
    // Method: 1
    // Call: 1(format, coded_size, visible_rect, num_frames)
  }

};

arc.mojom.VideoFramePoolClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
