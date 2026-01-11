// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_encode_accelerator.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var sandbox = sandbox || {};

arc.mojom.VideoFrameStorageTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.ResultSpec = { $: mojo.internal.Enum() };
arc.mojom.BitrateSpec = { $: {} };
arc.mojom.VideoEncodeProfileSpec = { $: {} };
arc.mojom.ConstantBitrateSpec = { $: {} };
arc.mojom.VariableBitrateSpec = { $: {} };
arc.mojom.VideoEncodeAcceleratorConfigSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator = {};
arc.mojom.VideoEncodeAccelerator.$interfaceName = 'arc.mojom.VideoEncodeAccelerator';
arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
arc.mojom.VideoEncodeClient = {};
arc.mojom.VideoEncodeClient.$interfaceName = 'arc.mojom.VideoEncodeClient';
arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec = { $: {} };
arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec = { $: {} };

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
  kErrorMax: 2,
};

// Enum: Result
arc.mojom.Result = {
  kSuccess: 0,
  kIllegalStateError: 1,
  kInvalidArgumentError: 2,
  kPlatformFailureError: 3,
  kInsufficientResourcesError: 4,
};

// Union: Bitrate
mojo.internal.Union(
    arc.mojom.BitrateSpec, 'arc.mojom.Bitrate', {
      'constant': {
        'ordinal': 0,
        'type': arc.mojom.ConstantBitrateSpec.$,
        'nullable': false,
      },
      'variable': {
        'ordinal': 1,
        'type': arc.mojom.VariableBitrateSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoEncodeProfile
mojo.internal.Struct(
    arc.mojom.VideoEncodeProfileSpec, 'arc.mojom.VideoEncodeProfile', [
      mojo.internal.StructField('profile', 0, 0, arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantBitrate
mojo.internal.Struct(
    arc.mojom.ConstantBitrateSpec, 'arc.mojom.ConstantBitrate', [
      mojo.internal.StructField('target', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariableBitrate
mojo.internal.Struct(
    arc.mojom.VariableBitrateSpec, 'arc.mojom.VariableBitrate', [
      mojo.internal.StructField('target', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('peak', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoEncodeAcceleratorConfig
mojo.internal.Struct(
    arc.mojom.VideoEncodeAcceleratorConfigSpec, 'arc.mojom.VideoEncodeAcceleratorConfig', [
      mojo.internal.StructField('input_format', 0, 0, arc.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_visible_size', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_profile', 16, 0, arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_bitrate_deprecated', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('initial_framerate', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_initial_framerate_deprecated', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('h264_output_level', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('has_h264_output_level', 34, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('storage_type', 40, 0, arc.mojom.VideoFrameStorageTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('bitrate', 48, 0, arc.mojom.BitrateSpec.$, null, true, 5, undefined),
    ],
    [[0, 48], [1, 56], [5, 64]]);

// Interface: VideoEncodeAccelerator
mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParams', [
      mojo.internal.StructField('profiles', 0, 0, mojo.internal.Array(arc.mojom.VideoEncodeProfileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.VideoEncodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoEncodeClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Encode_Params', [
      mojo.internal.StructField('format', 0, 0, arc.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('planes', 8, 0, mojo.internal.Array(arc.mojom.VideoFramePlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('frame_fd', 24, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('force_keyframe', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Encode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_Params', [
      mojo.internal.StructField('shmem_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParams', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_frame', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_Params', [
      mojo.internal.StructField('bitrate', 0, 0, arc.mojom.BitrateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('framerate', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_Params', [
      mojo.internal.StructField('bitrate', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('framerate', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('flush_done', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getSupportedProfiles() {
    return this.$.getSupportedProfiles();
  }
  initialize(config, client) {
    return this.$.initialize(config, client);
  }
  encode(format, frame_fd, planes, timestamp, force_keyframe) {
    return this.$.encode(format, frame_fd, planes, timestamp, force_keyframe);
  }
  useBitstreamBuffer(shmem_fd, offset, size) {
    return this.$.useBitstreamBuffer(shmem_fd, offset, size);
  }
  requestEncodingParametersChange(bitrate, framerate) {
    return this.$.requestEncodingParametersChange(bitrate, framerate);
  }
  requestEncodingParametersChangeDeprecated(bitrate, framerate) {
    return this.$.requestEncodingParametersChangeDeprecated(bitrate, framerate);
  }
  flush() {
    return this.$.flush();
  }
};

arc.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: 0 },
      { explicit: 9 },
      { explicit: 8 },
      { explicit: 3 },
      { explicit: 10 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  getSupportedProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec,
      arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec,
      [],
      false);
  }

  initialize(config, client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client],
      false);
  }

  encode(format, frame_fd, planes, timestamp, force_keyframe) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec,
      [format, frame_fd, planes, timestamp, force_keyframe],
      false);
  }

  useBitstreamBuffer(shmem_fd, offset, size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec,
      arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec,
      [shmem_fd, offset, size],
      false);
  }

  requestEncodingParametersChange(bitrate, framerate) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec,
      null,
      [bitrate, framerate],
      false);
  }

  requestEncodingParametersChangeDeprecated(bitrate, framerate) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec,
      null,
      [bitrate, framerate],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.VideoEncodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: 0 },
      { explicit: 9 },
      { explicit: 8 },
      { explicit: 3 },
      { explicit: 10 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec.$.structSpec);
          const result = this.impl.getSupportedProfiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.config, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec.$.structSpec);
          const result = this.impl.encode(params.format, params.frame_fd, params.planes, params.timestamp, params.force_keyframe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.useBitstreamBuffer(params.shmem_fd, params.offset, params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec.$.structSpec);
          const result = this.impl.requestEncodingParametersChange(params.bitrate, params.framerate);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.requestEncodingParametersChangeDeprecated(params.bitrate, params.framerate);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoEncodeAcceleratorReceiver = arc.mojom.VideoEncodeAcceleratorReceiver;

arc.mojom.VideoEncodeAcceleratorPtr = arc.mojom.VideoEncodeAcceleratorRemote;
arc.mojom.VideoEncodeAcceleratorRequest = arc.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeClient
mojo.internal.Struct(
    arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec, 'arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_Params', [
      mojo.internal.StructField('input_coded_size', 0, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec, 'arc.mojom.VideoEncodeClient_NotifyError_Params', [
      mojo.internal.StructField('error', 0, 0, VideoEncodeAccelerator.ErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    return this.$.requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size);
  }
  notifyError(error) {
    return this.$.notifyError(error);
  }
};

arc.mojom.VideoEncodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeClient', [
      { explicit: 0 },
      { explicit: 2 },
    ]);
  }

  requireBitstreamBuffers(input_count, input_coded_size, output_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [input_count, input_coded_size, output_buffer_size],
      false);
  }

  notifyError(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec,
      null,
      [error],
      false);
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

arc.mojom.VideoEncodeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeClient', [
      { explicit: 0 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec.$.structSpec);
          const result = this.impl.requireBitstreamBuffers(params.input_count, params.input_coded_size, params.output_buffer_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec.$.structSpec);
          const result = this.impl.notifyError(params.error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoEncodeClientReceiver = arc.mojom.VideoEncodeClientReceiver;

arc.mojom.VideoEncodeClientPtr = arc.mojom.VideoEncodeClientRemote;
arc.mojom.VideoEncodeClientRequest = arc.mojom.VideoEncodeClientPendingReceiver;

