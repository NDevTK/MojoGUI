// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoHost
arc.mojom.VideoHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoHost';
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onBootstrapVideoAcceleratorFactory() {
    // Method: OnBootstrapVideoAcceleratorFactory
    // Call: OnBootstrapVideoAcceleratorFactory()
  }

};

arc.mojom.VideoHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoInstance
arc.mojom.VideoInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoInstance';
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.VideoInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoAcceleratorFactory
arc.mojom.VideoAcceleratorFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoAcceleratorFactory';
  }

  1(video_encoder) {
    // Method: 1
    // Call: 1(video_encoder)
  }

  2(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    // Method: 2
    // Call: 2(video_decoder, protected_buffer_manager, browser_cdm_factory)
  }

  4(video_decoder) {
    // Method: 4
    // Call: 4(video_decoder)
  }

  3(video_protected_buffer_allocator) {
    // Method: 3
    // Call: 3(video_protected_buffer_allocator)
  }

};

arc.mojom.VideoAcceleratorFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
