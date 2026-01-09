// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoProtectedBufferAllocator
arc.mojom.VideoProtectedBufferAllocatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoProtectedBufferAllocator';
  }

  0(handle_fd, size) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(handle_fd, size)
      resolve({});
    });
  }

  1(handle_fd, pixel_format, picture_size) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(handle_fd, pixel_format, picture_size)
      resolve({});
    });
  }

  2(handle_fd) {
    // Method: 2
    // Call: 2(handle_fd)
  }

};

arc.mojom.VideoProtectedBufferAllocatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
