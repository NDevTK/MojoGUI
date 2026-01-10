// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_encode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: VideoFrameStorageType
arc.mojom.mojom.VideoFrameStorageType = {
  SHMEM: 0,
  DMABUF: 1,
};
arc.mojom.mojom.VideoFrameStorageTypeSpec = { $: mojo.internal.Enum() };

// Enum: Error
arc.mojom.mojom.Error = {
  kIllegalStateError: 0,
  kInvalidArgumentError: 1,
  kPlatformFailureError: 2,
  kErrorMax: 3,
};
arc.mojom.mojom.ErrorSpec = { $: mojo.internal.Enum() };

// Enum: Result
arc.mojom.mojom.Result = {
  kSuccess: 0,
  kIllegalStateError: 1,
  kInvalidArgumentError: 2,
  kPlatformFailureError: 3,
  kInsufficientResourcesError: 4,
};
arc.mojom.mojom.ResultSpec = { $: mojo.internal.Enum() };

// Union: Bitrate
arc.mojom.mojom.BitrateSpec = { $: mojo.internal.Union(
    'arc.mojom.Bitrate', {
      'constant': {
        'ordinal': 0,
        'type': arc.mojom.ConstantBitrateSpec,
      }},
      'variable': {
        'ordinal': 1,
        'type': arc.mojom.VariableBitrateSpec,
      }},
    })
};

// Struct: VideoEncodeProfile
arc.mojom.mojom.VideoEncodeProfileSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeProfile',
      packedSize: 32,
      fields: [
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'max_resolution', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_framerate_numerator', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_framerate_denominator', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConstantBitrate
arc.mojom.mojom.ConstantBitrateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ConstantBitrate',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VariableBitrate
arc.mojom.mojom.VariableBitrateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VariableBitrate',
      packedSize: 16,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'peak', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoEncodeAcceleratorConfig
arc.mojom.mojom.VideoEncodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAcceleratorConfig',
      packedSize: 56,
      fields: [
        { name: 'input_format', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'input_visible_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'output_profile', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'initial_bitrate_deprecated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'initial_framerate', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'has_initial_framerate_deprecated', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'h264_output_level', packedOffset: 25, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'has_h264_output_level', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'storage_type', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.VideoFrameStorageTypeSpec, nullable: false, minVersion: 1 },
        { name: 'bitrate', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.BitrateSpec, nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 40}, {version: 5, packedSize: 56}]
    }
  }
};

// Interface: VideoEncodeAccelerator
arc.mojom.mojom.VideoEncodeAccelerator = {};

arc.mojom.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedProfiles() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec,
      arc.mojom.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec,
      []);
  }

  initialize(config, client) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      arc.mojom.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client]);
  }

  encode(format, frame_fd, planes, timestamp, force_keyframe) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      null,
      [format, frame_fd, planes, timestamp, force_keyframe]);
  }

  useBitstreamBuffer(shmem_fd, offset, size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec,
      arc.mojom.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec,
      [shmem_fd, offset, size]);
  }

  requestEncodingParametersChange(bitrate, framerate) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec,
      null,
      [bitrate, framerate]);
  }

  requestEncodingParametersChangeDeprecated(bitrate, framerate) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec,
      null,
      [bitrate, framerate]);
  }

  flush() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      arc.mojom.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new arc.mojom.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedProfiles
arc.mojom.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.GetSupportedProfiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.GetSupportedProfiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.VideoEncodeProfileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Initialize
arc.mojom.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoEncodeAcceleratorConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.VideoEncodeClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Encode
arc.mojom.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.Encode_Params',
      packedSize: 40,
      fields: [
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'frame_fd', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.VideoFramePlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'force_keyframe', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for UseBitstreamBuffer
arc.mojom.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.UseBitstreamBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'shmem_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.UseBitstreamBuffer_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'payload_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_frame', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChange
arc.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.RequestEncodingParametersChange_Params',
      packedSize: 32,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BitrateSpec, nullable: false, minVersion: 0 },
        { name: 'framerate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChangeDeprecated
arc.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.RequestEncodingParametersChangeDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framerate', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
arc.mojom.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeAccelerator.Flush_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'flush_done', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VideoEncodeAcceleratorPtr = arc.mojom.mojom.VideoEncodeAcceleratorRemote;
arc.mojom.mojom.VideoEncodeAcceleratorRequest = arc.mojom.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeClient
arc.mojom.mojom.VideoEncodeClient = {};

arc.mojom.mojom.VideoEncodeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VideoEncodeClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VideoEncodeClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VideoEncodeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VideoEncodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [input_count, input_coded_size, output_buffer_size]);
  }

  notifyError(error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.VideoEncodeClient_NotifyError_ParamsSpec,
      null,
      [error]);
  }

};

arc.mojom.mojom.VideoEncodeClient.getRemote = function() {
  let remote = new arc.mojom.mojom.VideoEncodeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeClient',
    'context');
  return remote.$;
};

// ParamsSpec for RequireBitstreamBuffers
arc.mojom.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeClient.RequireBitstreamBuffers_Params',
      packedSize: 24,
      fields: [
        { name: 'input_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_coded_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'output_buffer_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyError
arc.mojom.mojom.VideoEncodeClient_NotifyError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoEncodeClient.NotifyError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: VideoEncodeAccelerator.ErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VideoEncodeClientPtr = arc.mojom.mojom.VideoEncodeClientRemote;
arc.mojom.mojom.VideoEncodeClientRequest = arc.mojom.mojom.VideoEncodeClientPendingReceiver;

