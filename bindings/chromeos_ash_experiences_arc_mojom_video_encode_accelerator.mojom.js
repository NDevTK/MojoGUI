// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_encode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: VideoFrameStorageType
arc.mojom.VideoFrameStorageType = {
  SHMEM: 0,
  DMABUF: 1,
};

// Enum: Error
arc.mojom.Error = {
  GPU: 0,
  GPU: 1,
  GPU: 2,
};

// Enum: Result
arc.mojom.Result = {
};

// Struct: VideoEncodeProfile
arc.mojom.VideoEncodeProfile = class {
  constructor(values = {}) {
    this.max_framerate_denominator = values.max_framerate_denominator !== undefined ? values.max_framerate_denominator : 0;
  }
};

// Struct: ConstantBitrate
arc.mojom.ConstantBitrate = class {
  constructor(values = {}) {
    this.target = values.target !== undefined ? values.target : 0;
  }
};

// Struct: VariableBitrate
arc.mojom.VariableBitrate = class {
  constructor(values = {}) {
    this.peak = values.peak !== undefined ? values.peak : 0;
  }
};

// Struct: VideoEncodeAcceleratorConfig
arc.mojom.VideoEncodeAcceleratorConfig = class {
  constructor(values = {}) {
    this.bitrate = values.bitrate !== undefined ? values.bitrate : 0;
  }
};

// Interface: VideoEncodeAccelerator
arc.mojom.VideoEncodeAcceleratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoEncodeAccelerator';
  }

};

arc.mojom.VideoEncodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoEncodeClient
arc.mojom.VideoEncodeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VideoEncodeClient';
  }

};

arc.mojom.VideoEncodeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
