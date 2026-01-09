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
media.mojom.VideoEncodeAcceleratorSupportedProfile = class {
  constructor(values = {}) {
    this.supports_gpu_shared_images = values.supports_gpu_shared_images !== undefined ? values.supports_gpu_shared_images : 0;
  }
};

// Struct: EncodeCommandBufferId
media.mojom.EncodeCommandBufferId = class {
  constructor(values = {}) {
    this.route_id = values.route_id !== undefined ? values.route_id : 0;
  }
};

// Struct: VariableBitratePeak
media.mojom.VariableBitratePeak = class {
  constructor(values = {}) {
    this.bps = values.bps !== undefined ? values.bps : 0;
  }
};

// Struct: VideoBitrateAllocation
media.mojom.VideoBitrateAllocation = class {
  constructor(values = {}) {
    this.variable_bitrate_peak = values.variable_bitrate_peak !== undefined ? values.variable_bitrate_peak : 0;
  }
};

// Struct: SpatialLayer
media.mojom.SpatialLayer = class {
  constructor(values = {}) {
    this.num_of_temporal_layers = values.num_of_temporal_layers !== undefined ? values.num_of_temporal_layers : 0;
  }
};

// Struct: ConstantBitrate
media.mojom.ConstantBitrate = class {
  constructor(values = {}) {
  }
};

// Struct: VariableBitrate
media.mojom.VariableBitrate = class {
  constructor(values = {}) {
    this.peak_bps = values.peak_bps !== undefined ? values.peak_bps : 0;
  }
};

// Struct: ExternalBitrate
media.mojom.ExternalBitrate = class {
  constructor(values = {}) {
  }
};

// Struct: VideoEncodeAcceleratorConfig
media.mojom.VideoEncodeAcceleratorConfig = class {
  constructor(values = {}) {
    this.kCamera = values.kCamera !== undefined ? values.kCamera : null;
  }
};

// Struct: VideoEncodeOptions
media.mojom.VideoEncodeOptions = class {
  constructor(values = {}) {
    this.force_keyframe = values.force_keyframe !== undefined ? values.force_keyframe : 0;
    this.reference_buffers = values.reference_buffers !== undefined ? values.reference_buffers : 0;
  }
};

// Struct: DropFrameMetadata
media.mojom.DropFrameMetadata = class {
  constructor(values = {}) {
    this.end_of_picture = values.end_of_picture !== undefined ? values.end_of_picture : 0;
  }
};

// Struct: H264Metadata
media.mojom.H264Metadata = class {
  constructor(values = {}) {
    this.layer_sync = values.layer_sync !== undefined ? values.layer_sync : 0;
  }
};

// Struct: Vp8Metadata
media.mojom.Vp8Metadata = class {
  constructor(values = {}) {
    this.layer_sync = values.layer_sync !== undefined ? values.layer_sync : 0;
  }
};

// Struct: Vp9Metadata
media.mojom.Vp9Metadata = class {
  constructor(values = {}) {
    this.p_diffs = values.p_diffs !== undefined ? values.p_diffs : 0;
  }
};

// Struct: SVCGenericMetadata
media.mojom.SVCGenericMetadata = class {
  constructor(values = {}) {
    this.refresh_flags = values.refresh_flags !== undefined ? values.refresh_flags : 0;
  }
};

// Struct: BitstreamBufferMetadata
media.mojom.BitstreamBufferMetadata = class {
  constructor(values = {}) {
    this.encoded_color_space = values.encoded_color_space !== undefined ? values.encoded_color_space : 0;
  }
};

// Interface: VideoEncodeAcceleratorProvider
media.mojom.VideoEncodeAcceleratorProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoEncodeAcceleratorProvider';
  }

  createVideoEncodeAccelerator(command_buffer_id, receiver) {
    // Method: CreateVideoEncodeAccelerator
    // Call: CreateVideoEncodeAccelerator(command_buffer_id, receiver)
  }

  getVideoEncodeAcceleratorSupportedProfiles() {
    // Method: GetVideoEncodeAcceleratorSupportedProfiles
    return new Promise((resolve) => {
      // Call: GetVideoEncodeAcceleratorSupportedProfiles()
      resolve({});
    });
  }

};

media.mojom.VideoEncodeAcceleratorProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoEncodeAcceleratorProviderFactory
media.mojom.VideoEncodeAcceleratorProviderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoEncodeAcceleratorProviderFactory';
  }

  createVideoEncodeAcceleratorProvider(receiver) {
    // Method: CreateVideoEncodeAcceleratorProvider
    // Call: CreateVideoEncodeAcceleratorProvider(receiver)
  }

};

media.mojom.VideoEncodeAcceleratorProviderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoEncodeAccelerator
media.mojom.VideoEncodeAcceleratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoEncodeAccelerator';
  }

  initialize(config, client, media_log) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(config, client, media_log)
      resolve({});
    });
  }

  encode(frame, options) {
    // Method: Encode
    // Call: Encode(frame, options)
  }

  useOutputBitstreamBuffer(bitstream_buffer_id, region) {
    // Method: UseOutputBitstreamBuffer
    // Call: UseOutputBitstreamBuffer(bitstream_buffer_id, region)
  }

  requestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size) {
    // Method: RequestEncodingParametersChangeWithLayers
    // Call: RequestEncodingParametersChangeWithLayers(bitrate_allocation, framerate, size)
  }

  requestEncodingParametersChangeWithBitrate(bitrate, framerate, size) {
    // Method: RequestEncodingParametersChangeWithBitrate
    // Call: RequestEncodingParametersChangeWithBitrate(bitrate, framerate, size)
  }

  isFlushSupported() {
    // Method: IsFlushSupported
    return new Promise((resolve) => {
      // Call: IsFlushSupported()
      resolve({});
    });
  }

  flush() {
    // Method: Flush
    return new Promise((resolve) => {
      // Call: Flush()
      resolve({});
    });
  }

};

media.mojom.VideoEncodeAcceleratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoEncodeAcceleratorClient
media.mojom.VideoEncodeAcceleratorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoEncodeAcceleratorClient';
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    // Method: RequireBitstreamBuffers
    // Call: RequireBitstreamBuffers(input_count, input_coded_size, output_buffer_size)
  }

  bitstreamBufferReady(bitstream_buffer_id, metadata) {
    // Method: BitstreamBufferReady
    // Call: BitstreamBufferReady(bitstream_buffer_id, metadata)
  }

  notifyErrorStatus(status) {
    // Method: NotifyErrorStatus
    // Call: NotifyErrorStatus(status)
  }

  notifyEncoderInfoChange(info) {
    // Method: NotifyEncoderInfoChange
    // Call: NotifyEncoderInfoChange(info)
  }

};

media.mojom.VideoEncodeAcceleratorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
