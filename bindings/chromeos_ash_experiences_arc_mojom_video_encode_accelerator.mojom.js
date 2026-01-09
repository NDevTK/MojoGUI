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
  kIllegalStateError: 0,
  kInvalidArgumentError: 1,
  kPlatformFailureError: 2,
  kErrorMax: 3,
};

// Enum: Result
arc.mojom.Result = {
  kSuccess: 0,
  kIllegalStateError: 1,
  kInvalidArgumentError: 2,
  kPlatformFailureError: 3,
  kInsufficientResourcesError: 4,
};

// Struct: VideoEncodeProfile
arc.mojom.VideoEncodeProfileSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeProfile',
      packedSize: 32,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false },
        { name: 'max_resolution', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false },
        { name: 'max_framerate_numerator', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_framerate_denominator', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConstantBitrate
arc.mojom.ConstantBitrateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ConstantBitrate',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VariableBitrate
arc.mojom.VariableBitrateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VariableBitrate',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'peak', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoEncodeAcceleratorConfig
arc.mojom.VideoEncodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAcceleratorConfig',
      packedSize: 64,
      fields: [
        { name: 'input_format', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false },
        { name: 'input_visible_size', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false },
        { name: 'output_profile', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false },
        { name: 'initial_bitrate_deprecated', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'initial_framerate', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'has_initial_framerate_deprecated', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'h264_output_level', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'has_h264_output_level', packedOffset: 41, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VideoEncodeAccelerator
arc.mojom.VideoEncodeAccelerator = {};

arc.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new arc.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoEncodeAcceleratorPtr = arc.mojom.VideoEncodeAcceleratorRemote;
arc.mojom.VideoEncodeAcceleratorRequest = arc.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeClient
arc.mojom.VideoEncodeClient = {};

arc.mojom.VideoEncodeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoEncodeClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoEncodeClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoEncodeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoEncodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoEncodeClient.getRemote = function() {
  let remote = new arc.mojom.VideoEncodeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoEncodeClientPtr = arc.mojom.VideoEncodeClientRemote;
arc.mojom.VideoEncodeClientRequest = arc.mojom.VideoEncodeClientPendingReceiver;

