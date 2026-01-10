// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encode_accelerator.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: VideoEncodeAcceleratorSupportedRateControlMode
media.mojom.mojom.VideoEncodeAcceleratorSupportedRateControlMode = {
  kNoMode: 0,
  kConstantMode: 1,
  kVariableMode: 2,
  kExternalMode: 3,
};
media.mojom.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec = { $: mojo.internal.Enum() };

// Enum: ContentType
media.mojom.mojom.ContentType = {
  kCamera: 0,
  kDisplay: 1,
};
media.mojom.mojom.ContentTypeSpec = { $: mojo.internal.Enum() };

// Enum: StorageType
media.mojom.mojom.StorageType = {
  kShmem: 0,
  kGpuMemoryBuffer: 1,
};
media.mojom.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };

// Enum: EncoderType
media.mojom.mojom.EncoderType = {
  kHardware: 0,
  kSoftware: 1,
  kNoPreference: 2,
};
media.mojom.mojom.EncoderTypeSpec = { $: mojo.internal.Enum() };

// Union: Bitrate
media.mojom.mojom.BitrateSpec = { $: mojo.internal.Union(
    'media.mojom.Bitrate', {
      'constant': {
        'ordinal': 0,
        'type': media.mojom.ConstantBitrateSpec,
      }},
      'variable': {
        'ordinal': 1,
        'type': media.mojom.VariableBitrateSpec,
      }},
      'external': {
        'ordinal': 2,
        'type': media.mojom.ExternalBitrateSpec,
      }},
    })
};

// Union: OptionalMetadata
media.mojom.mojom.OptionalMetadataSpec = { $: mojo.internal.Union(
    'media.mojom.OptionalMetadata', {
      'drop': {
        'ordinal': 0,
        'type': media.mojom.DropFrameMetadataSpec,
      }},
      'h264': {
        'ordinal': 1,
        'type': media.mojom.H264MetadataSpec,
      }},
      'vp8': {
        'ordinal': 2,
        'type': media.mojom.Vp8MetadataSpec,
      }},
      'vp9': {
        'ordinal': 3,
        'type': media.mojom.Vp9MetadataSpec,
      }},
    })
};

// Struct: VideoEncodeAcceleratorSupportedProfile
media.mojom.mojom.VideoEncodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorSupportedProfile',
      packedSize: 72,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'min_resolution', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_resolution', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_framerate_numerator', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_framerate_denominator', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'rate_control_modes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'scalability_modes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SVCScalabilityModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_software_codec', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gpu_supported_pixel_formats', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoPixelFormatSpec, false), nullable: false, minVersion: 0 },
        { name: 'supports_gpu_shared_images', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: EncodeCommandBufferId
media.mojom.mojom.EncodeCommandBufferIdSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EncodeCommandBufferId',
      packedSize: 24,
      fields: [
        { name: 'channel_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'route_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VariableBitratePeak
media.mojom.mojom.VariableBitratePeakSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VariableBitratePeak',
      packedSize: 16,
      fields: [
        { name: 'bps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoBitrateAllocation
media.mojom.mojom.VideoBitrateAllocationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoBitrateAllocation',
      packedSize: 24,
      fields: [
        { name: 'bitrates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'variable_bitrate_peak', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VariableBitratePeakSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SpatialLayer
media.mojom.mojom.SpatialLayerSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpatialLayer',
      packedSize: 32,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bitrate_bps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'framerate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_qp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'num_of_temporal_layers', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConstantBitrate
media.mojom.mojom.ConstantBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ConstantBitrate',
      packedSize: 16,
      fields: [
        { name: 'target_bps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VariableBitrate
media.mojom.mojom.VariableBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VariableBitrate',
      packedSize: 16,
      fields: [
        { name: 'target_bps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'peak_bps', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ExternalBitrate
media.mojom.mojom.ExternalBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ExternalBitrate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: VideoEncodeAcceleratorConfig
media.mojom.mojom.VideoEncodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorConfig',
      packedSize: 16,
      fields: [
        { name: 'kCamera', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoEncodeOptions
media.mojom.mojom.VideoEncodeOptionsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeOptions',
      packedSize: 24,
      fields: [
        { name: 'force_keyframe', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'quantizer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'update_buffer_$flag', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'update_buffer_$value', originalFieldName: 'update_buffer' } },
        { name: 'update_buffer_$value', packedOffset: 13, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'update_buffer_$flag', originalFieldName: 'update_buffer' } },
        { name: 'reference_buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DropFrameMetadata
media.mojom.mojom.DropFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DropFrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'spatial_idx', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'end_of_picture', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: H264Metadata
media.mojom.mojom.H264MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.H264Metadata',
      packedSize: 16,
      fields: [
        { name: 'temporal_idx', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'layer_sync', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Vp8Metadata
media.mojom.mojom.Vp8MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Vp8Metadata',
      packedSize: 16,
      fields: [
        { name: 'non_reference', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'temporal_idx', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'layer_sync', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Vp9Metadata
media.mojom.mojom.Vp9MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Vp9Metadata',
      packedSize: 32,
      fields: [
        { name: 'inter_pic_predicted', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'temporal_up_switch', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'referenced_by_upper_spatial_layers', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reference_lower_spatial_layers', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'end_of_picture', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'temporal_idx', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'spatial_idx', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'spatial_layer_resolutions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'begin_active_spatial_layer_index', packedOffset: 19, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'end_active_spatial_layer_index', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'p_diffs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SVCGenericMetadata
media.mojom.mojom.SVCGenericMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SVCGenericMetadata',
      packedSize: 16,
      fields: [
        { name: 'follow_svc_spec', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'temporal_idx', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'spatial_idx', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'reference_flags_$flag', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reference_flags_$value', originalFieldName: 'reference_flags' } },
        { name: 'reference_flags_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reference_flags_$flag', originalFieldName: 'reference_flags' } },
        { name: 'refresh_flags_$flag', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'refresh_flags_$value', originalFieldName: 'refresh_flags' } },
        { name: 'refresh_flags_$value', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'refresh_flags_$flag', originalFieldName: 'refresh_flags' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BitstreamBufferMetadata
media.mojom.mojom.BitstreamBufferMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.BitstreamBufferMetadata',
      packedSize: 72,
      fields: [
        { name: 'payload_size_bytes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_frame', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'qp', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'optional_metadata', packedOffset: 0, packedBitOffset: 0, type: media.mojom.OptionalMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'svc_generic', packedOffset: 24, packedBitOffset: 0, type: media.mojom.SVCGenericMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'encoded_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
        { name: 'encoded_color_space', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: VideoEncodeAcceleratorProvider
media.mojom.mojom.VideoEncodeAcceleratorProvider = {};

media.mojom.mojom.VideoEncodeAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoEncodeAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoEncodeAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoEncodeAccelerator(command_buffer_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec,
      null,
      [command_buffer_id, receiver]);
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec,
      media.mojom.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec,
      []);
  }

};

media.mojom.mojom.VideoEncodeAcceleratorProvider.getRemote = function() {
  let remote = new media.mojom.mojom.VideoEncodeAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateVideoEncodeAccelerator
media.mojom.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.CreateVideoEncodeAccelerator_Params',
      packedSize: 24,
      fields: [
        { name: 'command_buffer_id', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncodeCommandBufferIdSpec, nullable: true, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetVideoEncodeAcceleratorSupportedProfiles
media.mojom.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.GetVideoEncodeAcceleratorSupportedProfiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.GetVideoEncodeAcceleratorSupportedProfiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedProfileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoEncodeAcceleratorProviderPtr = media.mojom.mojom.VideoEncodeAcceleratorProviderRemote;
media.mojom.mojom.VideoEncodeAcceleratorProviderRequest = media.mojom.mojom.VideoEncodeAcceleratorProviderPendingReceiver;


// Interface: VideoEncodeAcceleratorProviderFactory
media.mojom.mojom.VideoEncodeAcceleratorProviderFactory = {};

media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProviderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoEncodeAcceleratorProvider(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [receiver]);
  }

};

media.mojom.mojom.VideoEncodeAcceleratorProviderFactory.getRemote = function() {
  let remote = new media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProviderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
media.mojom.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProviderFactory.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryPtr = media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRemote;
media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryRequest = media.mojom.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver;


// Interface: VideoEncodeAccelerator
media.mojom.mojom.VideoEncodeAccelerator = {};

media.mojom.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(config, client, media_log) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      media.mojom.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client, media_log]);
  }

  encode(frame, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      null,
      [frame, options]);
  }

  useOutputBitstreamBuffer(bitstream_buffer_id, region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_buffer_id, region]);
  }

  requestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec,
      null,
      [bitrate_allocation, framerate, size]);
  }

  requestEncodingParametersChangeWithBitrate(bitrate, framerate, size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec,
      null,
      [bitrate, framerate, size]);
  }

  isFlushSupported() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec,
      media.mojom.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec,
      []);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      media.mojom.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      []);
  }

};

media.mojom.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new media.mojom.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
media.mojom.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoEncodeAcceleratorConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(media.mojom.VideoEncodeAcceleratorClientRemote), nullable: false, minVersion: 0 },
        { name: 'media_log', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Encode
media.mojom.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Encode_Params',
      packedSize: 24,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoEncodeOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UseOutputBitstreamBuffer
media.mojom.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.UseOutputBitstreamBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'bitstream_buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChangeWithLayers
media.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.RequestEncodingParametersChangeWithLayers_Params',
      packedSize: 32,
      fields: [
        { name: 'bitrate_allocation', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoBitrateAllocationSpec, nullable: false, minVersion: 0 },
        { name: 'framerate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChangeWithBitrate
media.mojom.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.RequestEncodingParametersChangeWithBitrate_Params',
      packedSize: 40,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BitrateSpec, nullable: false, minVersion: 0 },
        { name: 'framerate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for IsFlushSupported
media.mojom.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.IsFlushSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.IsFlushSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Flush_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoEncodeAcceleratorPtr = media.mojom.mojom.VideoEncodeAcceleratorRemote;
media.mojom.mojom.VideoEncodeAcceleratorRequest = media.mojom.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeAcceleratorClient
media.mojom.mojom.VideoEncodeAcceleratorClient = {};

media.mojom.mojom.VideoEncodeAcceleratorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoEncodeAcceleratorClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoEncodeAcceleratorClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoEncodeAcceleratorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoEncodeAcceleratorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [input_count, input_coded_size, output_buffer_size]);
  }

  bitstreamBufferReady(bitstream_buffer_id, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec,
      null,
      [bitstream_buffer_id, metadata]);
  }

  notifyErrorStatus(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec,
      null,
      [status]);
  }

  notifyEncoderInfoChange(info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec,
      null,
      [info]);
  }

};

media.mojom.mojom.VideoEncodeAcceleratorClient.getRemote = function() {
  let remote = new media.mojom.mojom.VideoEncodeAcceleratorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorClient',
    'context');
  return remote.$;
};

// ParamsSpec for RequireBitstreamBuffers
media.mojom.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.RequireBitstreamBuffers_Params',
      packedSize: 24,
      fields: [
        { name: 'input_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input_coded_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'output_buffer_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BitstreamBufferReady
media.mojom.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.BitstreamBufferReady_Params',
      packedSize: 24,
      fields: [
        { name: 'bitstream_buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media.mojom.BitstreamBufferMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyErrorStatus
media.mojom.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.NotifyErrorStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyEncoderInfoChange
media.mojom.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.NotifyEncoderInfoChange_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoEncoderInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoEncodeAcceleratorClientPtr = media.mojom.mojom.VideoEncodeAcceleratorClientRemote;
media.mojom.mojom.VideoEncodeAcceleratorClientRequest = media.mojom.mojom.VideoEncodeAcceleratorClientPendingReceiver;

