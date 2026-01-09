// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encode_accelerator.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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

// Struct: VideoEncodeAcceleratorSupportedProfile
media.mojom.VideoEncodeAcceleratorSupportedProfileSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorSupportedProfile',
      packedSize: 16,
      fields: [
        { name: 'supports_gpu_shared_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EncodeCommandBufferId
media.mojom.EncodeCommandBufferIdSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EncodeCommandBufferId',
      packedSize: 16,
      fields: [
        { name: 'route_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VariableBitratePeak
media.mojom.VariableBitratePeakSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VariableBitratePeak',
      packedSize: 16,
      fields: [
        { name: 'bps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoBitrateAllocation
media.mojom.VideoBitrateAllocationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoBitrateAllocation',
      packedSize: 16,
      fields: [
        { name: 'variable_bitrate_peak', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpatialLayer
media.mojom.SpatialLayerSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpatialLayer',
      packedSize: 16,
      fields: [
        { name: 'num_of_temporal_layers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConstantBitrate
media.mojom.ConstantBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ConstantBitrate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VariableBitrate
media.mojom.VariableBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VariableBitrate',
      packedSize: 16,
      fields: [
        { name: 'peak_bps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExternalBitrate
media.mojom.ExternalBitrateSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ExternalBitrate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoEncodeAcceleratorConfig
media.mojom.VideoEncodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorConfig',
      packedSize: 16,
      fields: [
        { name: 'kCamera', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoEncodeOptions
media.mojom.VideoEncodeOptionsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeOptions',
      packedSize: 16,
      fields: [
        { name: 'reference_buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DropFrameMetadata
media.mojom.DropFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DropFrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'end_of_picture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: H264Metadata
media.mojom.H264MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.H264Metadata',
      packedSize: 16,
      fields: [
        { name: 'layer_sync', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vp8Metadata
media.mojom.Vp8MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Vp8Metadata',
      packedSize: 16,
      fields: [
        { name: 'layer_sync', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vp9Metadata
media.mojom.Vp9MetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Vp9Metadata',
      packedSize: 16,
      fields: [
        { name: 'p_diffs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SVCGenericMetadata
media.mojom.SVCGenericMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SVCGenericMetadata',
      packedSize: 16,
      fields: [
        { name: 'refresh_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BitstreamBufferMetadata
media.mojom.BitstreamBufferMetadataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.BitstreamBufferMetadata',
      packedSize: 16,
      fields: [
        { name: 'encoded_color_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VideoEncodeAcceleratorProvider
media.mojom.VideoEncodeAcceleratorProvider = {};

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
      [command_buffer_id, receiver]);
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec,
      media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec,
      []);
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

// ParamsSpec for CreateVideoEncodeAccelerator
media.mojom.VideoEncodeAcceleratorProvider_CreateVideoEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.CreateVideoEncodeAccelerator_Params',
      packedSize: 24,
      fields: [
        { name: 'command_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideoEncodeAcceleratorSupportedProfiles
media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.GetVideoEncodeAcceleratorSupportedProfiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoEncodeAcceleratorProvider_GetVideoEncodeAcceleratorSupportedProfiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProvider.GetVideoEncodeAcceleratorSupportedProfiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoEncodeAcceleratorProviderPtr = media.mojom.VideoEncodeAcceleratorProviderRemote;
media.mojom.VideoEncodeAcceleratorProviderRequest = media.mojom.VideoEncodeAcceleratorProviderPendingReceiver;


// Interface: VideoEncodeAcceleratorProviderFactory
media.mojom.VideoEncodeAcceleratorProviderFactory = {};

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
      [receiver]);
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

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
media.mojom.VideoEncodeAcceleratorProviderFactory_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorProviderFactory.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoEncodeAcceleratorProviderFactoryPtr = media.mojom.VideoEncodeAcceleratorProviderFactoryRemote;
media.mojom.VideoEncodeAcceleratorProviderFactoryRequest = media.mojom.VideoEncodeAcceleratorProviderFactoryPendingReceiver;


// Interface: VideoEncodeAccelerator
media.mojom.VideoEncodeAccelerator = {};

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
      [config, client, media_log]);
  }

  encode(frame, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      null,
      [frame, options]);
  }

  useOutputBitstreamBuffer(bitstream_buffer_id, region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_buffer_id, region]);
  }

  requestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec,
      null,
      [bitrate_allocation, framerate, size]);
  }

  requestEncodingParametersChangeWithBitrate(bitrate, framerate, size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec,
      null,
      [bitrate, framerate, size]);
  }

  isFlushSupported() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec,
      []);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      []);
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

// ParamsSpec for Initialize
media.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'media_log', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Encode
media.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Encode_Params',
      packedSize: 24,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UseOutputBitstreamBuffer
media.mojom.VideoEncodeAccelerator_UseOutputBitstreamBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.UseOutputBitstreamBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bitstream_buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChangeWithLayers
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithLayers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.RequestEncodingParametersChangeWithLayers_Params',
      packedSize: 32,
      fields: [
        { name: 'bitrate_allocation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'framerate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestEncodingParametersChangeWithBitrate
media.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeWithBitrate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.RequestEncodingParametersChangeWithBitrate_Params',
      packedSize: 32,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'framerate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsFlushSupported
media.mojom.VideoEncodeAccelerator_IsFlushSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.IsFlushSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoEncodeAccelerator_IsFlushSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.IsFlushSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAccelerator.Flush_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoEncodeAcceleratorPtr = media.mojom.VideoEncodeAcceleratorRemote;
media.mojom.VideoEncodeAcceleratorRequest = media.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeAcceleratorClient
media.mojom.VideoEncodeAcceleratorClient = {};

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
      [input_count, input_coded_size, output_buffer_size]);
  }

  bitstreamBufferReady(bitstream_buffer_id, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec,
      null,
      [bitstream_buffer_id, metadata]);
  }

  notifyErrorStatus(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec,
      null,
      [status]);
  }

  notifyEncoderInfoChange(info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec,
      null,
      [info]);
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

// ParamsSpec for RequireBitstreamBuffers
media.mojom.VideoEncodeAcceleratorClient_RequireBitstreamBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.RequireBitstreamBuffers_Params',
      packedSize: 24,
      fields: [
        { name: 'input_coded_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'input_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'output_buffer_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BitstreamBufferReady
media.mojom.VideoEncodeAcceleratorClient_BitstreamBufferReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.BitstreamBufferReady_Params',
      packedSize: 24,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bitstream_buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyErrorStatus
media.mojom.VideoEncodeAcceleratorClient_NotifyErrorStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.NotifyErrorStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyEncoderInfoChange
media.mojom.VideoEncodeAcceleratorClient_NotifyEncoderInfoChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncodeAcceleratorClient.NotifyEncoderInfoChange_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoEncodeAcceleratorClientPtr = media.mojom.VideoEncodeAcceleratorClientRemote;
media.mojom.VideoEncodeAcceleratorClientRequest = media.mojom.VideoEncodeAcceleratorClientPendingReceiver;

