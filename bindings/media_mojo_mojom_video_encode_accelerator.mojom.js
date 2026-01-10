// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encode_accelerator.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec = { $: mojo.internal.Enum() };
media.mojom.ContentTypeSpec = { $: mojo.internal.Enum() };
media.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };
media.mojom.EncoderTypeSpec = { $: mojo.internal.Enum() };
media.mojom.BitrateSpec = { $: {} };
media.mojom.OptionalMetadataSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorSupportedProfileSpec = { $: {} };
media.mojom.EncodeCommandBufferIdSpec = { $: {} };
media.mojom.VariableBitratePeakSpec = { $: {} };
media.mojom.VideoBitrateAllocationSpec = { $: {} };
media.mojom.SpatialLayerSpec = { $: {} };
media.mojom.ConstantBitrateSpec = { $: {} };
media.mojom.VariableBitrateSpec = { $: {} };
media.mojom.ExternalBitrateSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorConfigSpec = { $: {} };
media.mojom.VideoEncodeOptionsSpec = { $: {} };
media.mojom.DropFrameMetadataSpec = { $: {} };
media.mojom.H264MetadataSpec = { $: {} };
media.mojom.Vp8MetadataSpec = { $: {} };
media.mojom.Vp9MetadataSpec = { $: {} };
media.mojom.SVCGenericMetadataSpec = { $: {} };
media.mojom.BitstreamBufferMetadataSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider = {};
media.mojom.VideoEncodeAcceleratorProvider.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProvider';
media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorProviderFactory = {};
media.mojom.VideoEncodeAcceleratorProviderFactory.$interfaceName = 'media.mojom.VideoEncodeAcceleratorProviderFactory';
media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator = {};
media.mojom.VideoEncodeAccelerator.$interfaceName = 'media.mojom.VideoEncodeAccelerator';
media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient = {};
media.mojom.VideoEncodeAcceleratorClient.$interfaceName = 'media.mojom.VideoEncodeAcceleratorClient';
media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec = { $: {} };
media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec = { $: {} };

// Enum: VideoEncodeAcceleratorSupportedRateControlMode
media.mojom.VideoEncodeAcceleratorSupportedRateControlMode = {
  kNoMode: 0,
  kConstantMode: 1,
  kVariableMode: 2,
  kExternalMode: 3,
};

// Enum: ContentType
media.mojom.ContentType = {
  kCamera: 0,
  kDisplay: 1,
};

// Enum: StorageType
media.mojom.StorageType = {
  kShmem: 0,
  kGpuMemoryBuffer: 1,
};

// Enum: EncoderType
media.mojom.EncoderType = {
  kHardware: 0,
  kSoftware: 1,
  kNoPreference: 2,
};

// Union: Bitrate
mojo.internal.Union(
    media.mojom.BitrateSpec, 'media.mojom.Bitrate', {
      'constant': {
        'ordinal': 0,
        'type': media.mojom.ConstantBitrateSpec.$,
        'nullable': false,
      },
      'variable': {
        'ordinal': 1,
        'type': media.mojom.VariableBitrateSpec.$,
        'nullable': false,
      },
      'external': {
        'ordinal': 2,
        'type': media.mojom.ExternalBitrateSpec.$,
        'nullable': false,
      },
    });

// Union: OptionalMetadata
mojo.internal.Union(
    media.mojom.OptionalMetadataSpec, 'media.mojom.OptionalMetadata', {
      'drop': {
        'ordinal': 0,
        'type': media.mojom.DropFrameMetadataSpec.$,
        'nullable': false,
      },
      'h264': {
        'ordinal': 1,
        'type': media.mojom.H264MetadataSpec.$,
        'nullable': false,
      },
      'vp8': {
        'ordinal': 2,
        'type': media.mojom.Vp8MetadataSpec.$,
        'nullable': false,
      },
      'vp9': {
        'ordinal': 3,
        'type': media.mojom.Vp9MetadataSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoEncodeAcceleratorSupportedProfile
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorSupportedProfileSpec, 'media.mojom.VideoEncodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rate_control_modes', 24, 0, mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedRateControlModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scalability_modes', 32, 0, mojo.internal.Array(media.mojom.SVCScalabilityModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('gpu_supported_pixel_formats', 40, 0, mojo.internal.Array(media.mojom.VideoPixelFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_software_codec', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_gpu_shared_images', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EncodeCommandBufferId
mojo.internal.Struct(
    media.mojom.EncodeCommandBufferIdSpec, 'media.mojom.EncodeCommandBufferId', [
      mojo.internal.StructField('channel_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VariableBitratePeak
mojo.internal.Struct(
    media.mojom.VariableBitratePeakSpec, 'media.mojom.VariableBitratePeak', [
      mojo.internal.StructField('bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoBitrateAllocation
mojo.internal.Struct(
    media.mojom.VideoBitrateAllocationSpec, 'media.mojom.VideoBitrateAllocation', [
      mojo.internal.StructField('bitrates', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('variable_bitrate_peak', 8, 0, media.mojom.VariableBitratePeakSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpatialLayer
mojo.internal.Struct(
    media.mojom.SpatialLayerSpec, 'media.mojom.SpatialLayer', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate_bps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framerate', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_qp', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('num_of_temporal_layers', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantBitrate
mojo.internal.Struct(
    media.mojom.ConstantBitrateSpec, 'media.mojom.ConstantBitrate', [
      mojo.internal.StructField('target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariableBitrate
mojo.internal.Struct(
    media.mojom.VariableBitrateSpec, 'media.mojom.VariableBitrate', [
      mojo.internal.StructField('target_bps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('peak_bps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ExternalBitrate
mojo.internal.Struct(
    media.mojom.ExternalBitrateSpec, 'media.mojom.ExternalBitrate', [
    ],
    [[0, 8]]);

// Struct: VideoEncodeAcceleratorConfig
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorConfigSpec, 'media.mojom.VideoEncodeAcceleratorConfig', [
      mojo.internal.StructField('kCamera', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoEncodeOptions
mojo.internal.Struct(
    media.mojom.VideoEncodeOptionsSpec, 'media.mojom.VideoEncodeOptions', [
      mojo.internal.StructField('reference_buffers', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('quantizer', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('force_keyframe', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('update_buffer_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'update_buffer_$value', originalFieldName: 'update_buffer' }),
      mojo.internal.StructField('update_buffer_$value', 13, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'update_buffer_$flag', originalFieldName: 'update_buffer' }),
    ],
    [[0, 24]]);

// Struct: DropFrameMetadata
mojo.internal.Struct(
    media.mojom.DropFrameMetadataSpec, 'media.mojom.DropFrameMetadata', [
      mojo.internal.StructField('spatial_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('end_of_picture', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: H264Metadata
mojo.internal.Struct(
    media.mojom.H264MetadataSpec, 'media.mojom.H264Metadata', [
      mojo.internal.StructField('temporal_idx', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('layer_sync', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp8Metadata
mojo.internal.Struct(
    media.mojom.Vp8MetadataSpec, 'media.mojom.Vp8Metadata', [
      mojo.internal.StructField('non_reference', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('layer_sync', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vp9Metadata
mojo.internal.Struct(
    media.mojom.Vp9MetadataSpec, 'media.mojom.Vp9Metadata', [
      mojo.internal.StructField('spatial_layer_resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('p_diffs', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('inter_pic_predicted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_up_switch', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('referenced_by_upper_spatial_layers', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reference_lower_spatial_layers', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('end_of_picture', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 17, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('spatial_idx', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('begin_active_spatial_layer_index', 19, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('end_active_spatial_layer_index', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SVCGenericMetadata
mojo.internal.Struct(
    media.mojom.SVCGenericMetadataSpec, 'media.mojom.SVCGenericMetadata', [
      mojo.internal.StructField('reference_flags_$value', 0, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'reference_flags_$flag', originalFieldName: 'reference_flags' }),
      mojo.internal.StructField('refresh_flags_$value', 2, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'refresh_flags_$flag', originalFieldName: 'refresh_flags' }),
      mojo.internal.StructField('follow_svc_spec', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('temporal_idx', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('spatial_idx', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('reference_flags_$flag', 7, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reference_flags_$value', originalFieldName: 'reference_flags' }),
      mojo.internal.StructField('refresh_flags_$flag', 7, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'refresh_flags_$value', originalFieldName: 'refresh_flags' }),
    ],
    [[0, 16]]);

// Struct: BitstreamBufferMetadata
mojo.internal.Struct(
    media.mojom.BitstreamBufferMetadataSpec, 'media.mojom.BitstreamBufferMetadata', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('optional_metadata', 8, 0, media.mojom.OptionalMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('svc_generic', 16, 0, media.mojom.SVCGenericMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('encoded_size', 24, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('encoded_color_space', 32, 0, gfx.mojom.ColorSpaceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payload_size_bytes', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('qp', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('key_frame', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: VideoEncodeAcceleratorProvider
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_Params', [
      mojo.internal.StructField('command_buffer_id', 0, 0, media.mojom.EncodeCommandBufferIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec, 'media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParams', [
      mojo.internal.StructField('profiles', 0, 0, mojo.internal.Array(media.mojom.VideoEncodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoEncodeAccelerator(command_buffer_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec,
      null,
      [command_buffer_id, receiver],
      false);
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec,
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorProvider.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProvider',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoEncodeAccelerator(params.command_buffer_id, params.receiver);
          break;
        }
        case 1: {
          const params = media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVideoEncodeAcceleratorSupportedProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media.mojom.VideoEncodeAcceleratorProviderReceiver = media.mojom.VideoEncodeAcceleratorProviderReceiver;

media.mojom.VideoEncodeAcceleratorProviderPtr = media.mojom.VideoEncodeAcceleratorProviderRemote;
media.mojom.VideoEncodeAcceleratorProviderRequest = media.mojom.VideoEncodeAcceleratorProviderPendingReceiver;


// Interface: VideoEncodeAcceleratorProviderFactory
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorProviderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoEncodeAcceleratorProvider(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorProviderFactory.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorProviderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorProviderFactory',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.receiver);
          break;
        }
      }
    });
  }
};

media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver = media.mojom.VideoEncodeAcceleratorProviderFactoryReceiver;

media.mojom.VideoEncodeAcceleratorProviderFactoryPtr = media.mojom.VideoEncodeAcceleratorProviderFactoryRemote;
media.mojom.VideoEncodeAcceleratorProviderFactoryRequest = media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver;


// Interface: VideoEncodeAccelerator
mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoEncodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 16, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.VideoFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, media.mojom.VideoEncodeOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Encode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_Params', [
      mojo.internal.StructField('bitrate_allocation', 0, 0, media.mojom.VideoBitrateAllocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_Params', [
      mojo.internal.StructField('bitrate', 0, 0, media.mojom.BitrateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('framerate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, 'media.mojom.VideoEncodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(config, client, media_log) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client, media_log],
      false);
  }

  encode(frame, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec,
      [frame, options],
      false);
  }

  useOutputBitstreamBuffer(bitstream_buffer_id, region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_buffer_id, region],
      false);
  }

  requestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec,
      null,
      [bitrate_allocation, framerate, size],
      false);
  }

  requestEncodingParametersChangeWithBitrate(bitrate, framerate, size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec,
      null,
      [bitrate, framerate, size],
      false);
  }

  isFlushSupported() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.config, params.client, params.media_log);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.encode(params.frame, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.useOutputBitstreamBuffer(params.bitstream_buffer_id, params.region);
          break;
        }
        case 3: {
          const params = media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestEncodingParametersChangeWithLayers(params.bitrate_allocation, params.framerate, params.size);
          break;
        }
        case 4: {
          const params = media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestEncodingParametersChangeWithBitrate(params.bitrate, params.framerate, params.size);
          break;
        }
        case 5: {
          const params = media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isFlushSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

media.mojom.VideoEncodeAcceleratorReceiver = media.mojom.VideoEncodeAcceleratorReceiver;

media.mojom.VideoEncodeAcceleratorPtr = media.mojom.VideoEncodeAcceleratorRemote;
media.mojom.VideoEncodeAcceleratorRequest = media.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeAcceleratorClient
mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_Params', [
      mojo.internal.StructField('input_coded_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_Params', [
      mojo.internal.StructField('metadata', 0, 0, media.mojom.BitstreamBufferMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitstream_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec, 'media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_Params', [
      mojo.internal.StructField('info', 0, 0, media.mojom.VideoEncoderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.VideoEncodeAcceleratorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncodeAcceleratorClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncodeAcceleratorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncodeAcceleratorClientPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncodeAcceleratorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [input_count, input_coded_size, output_buffer_size],
      false);
  }

  bitstreamBufferReady(bitstream_buffer_id, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec,
      null,
      [bitstream_buffer_id, metadata],
      false);
  }

  notifyErrorStatus(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  notifyEncoderInfoChange(info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec,
      null,
      [info],
      false);
  }

};

media.mojom.VideoEncodeAcceleratorClient.getRemote = function() {
  let remote = new media.mojom.VideoEncodeAcceleratorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncodeAcceleratorClient',
    'context');
  return remote.$;
};

media.mojom.VideoEncodeAcceleratorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requireBitstreamBuffers(params.input_count, params.input_coded_size, params.output_buffer_size);
          break;
        }
        case 1: {
          const params = media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bitstreamBufferReady(params.bitstream_buffer_id, params.metadata);
          break;
        }
        case 2: {
          const params = media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyErrorStatus(params.status);
          break;
        }
        case 3: {
          const params = media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyEncoderInfoChange(params.info);
          break;
        }
      }
    });
  }
};

media.mojom.VideoEncodeAcceleratorClientReceiver = media.mojom.VideoEncodeAcceleratorClientReceiver;

media.mojom.VideoEncodeAcceleratorClientPtr = media.mojom.VideoEncodeAcceleratorClientRemote;
media.mojom.VideoEncodeAcceleratorClientRequest = media.mojom.VideoEncodeAcceleratorClientPendingReceiver;

