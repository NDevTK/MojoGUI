// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: Result
arc.mojom.Result = {
  SUCCESS: 0,
  ILLEGAL_STATE: 1,
  INVALID_ARGUMENT: 2,
  UNREADABLE_INPUT: 3,
  PLATFORM_FAILURE: 4,
  INSUFFICIENT_RESOURCES: 5,
  CANCELLED: 6,
};
arc.mojom.ResultSpec = { $: mojo.internal.Enum() };

// Struct: BitstreamBuffer
arc.mojom.BitstreamBufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BitstreamBuffer',
      packedSize: 24,
      fields: [
        { name: 'bitstream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'handle_fd', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bytes_used', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Picture
arc.mojom.PictureSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Picture',
      packedSize: 24,
      fields: [
        { name: 'picture_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bitstream_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'crop_rect', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PictureBufferFormat
arc.mojom.PictureBufferFormatSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PictureBufferFormat',
      packedSize: 24,
      fields: [
        { name: 'min_num_buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoDecodeAcceleratorConfig
arc.mojom.VideoDecodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAcceleratorConfig',
      packedSize: 16,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'secure_mode', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BufferModifier
arc.mojom.BufferModifierSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BufferModifier',
      packedSize: 16,
      fields: [
        { name: 'val', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: VideoDecodeAccelerator
arc.mojom.VideoDecodeAccelerator = {};

arc.mojom.VideoDecodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecodeAcceleratorPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(config, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec,
      arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec,
      [config, client]);
  }

  decode(bitstream_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec,
      null,
      [bitstream_buffer]);
  }

  assignPictureBuffers(count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec,
      null,
      [count]);
  }

  importBufferForPicture(picture_buffer_id, format, handle_fd, planes, modifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec,
      null,
      [picture_buffer_id, format, handle_fd, planes, modifier]);
  }

  reusePictureBuffer(picture_buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec,
      null,
      [picture_buffer_id]);
  }

  reset() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec,
      arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec,
      []);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec,
      arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec,
      []);
  }

};

arc.mojom.VideoDecodeAccelerator.getRemote = function() {
  let remote = new arc.mojom.VideoDecodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecodeAccelerator',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoDecodeAcceleratorConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Decode
arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Decode_Params',
      packedSize: 16,
      fields: [
        { name: 'bitstream_buffer', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.BitstreamBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AssignPictureBuffers
arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.AssignPictureBuffers_Params',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ImportBufferForPicture
arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.ImportBufferForPicture_Params',
      packedSize: 40,
      fields: [
        { name: 'picture_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.VideoFramePlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.BufferModifierSpec, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 4, packedSize: 40}]
    }
  }
};

// ParamsSpec for ReusePictureBuffer
arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.ReusePictureBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'picture_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reset
arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Reset_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAccelerator.Flush_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoDecodeAcceleratorPtr = arc.mojom.VideoDecodeAcceleratorRemote;
arc.mojom.VideoDecodeAcceleratorRequest = arc.mojom.VideoDecodeAcceleratorPendingReceiver;


// Interface: VideoDecodeClient
arc.mojom.VideoDecodeClient = {};

arc.mojom.VideoDecodeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecodeClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecodeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecodeClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecodeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pictureReady(picture) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec,
      null,
      [picture]);
  }

  notifyEndOfBitstreamBuffer(bitstream_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_id]);
  }

  notifyError(error) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec,
      null,
      [error]);
  }

  providePictureBuffers(format, visible_rect) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec,
      null,
      [format, visible_rect]);
  }

};

arc.mojom.VideoDecodeClient.getRemote = function() {
  let remote = new arc.mojom.VideoDecodeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecodeClient',
    'context');
  return remote.$;
};

// ParamsSpec for PictureReady
arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeClient.PictureReady_Params',
      packedSize: 16,
      fields: [
        { name: 'picture', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PictureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyEndOfBitstreamBuffer
arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeClient.NotifyEndOfBitstreamBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'bitstream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyError
arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeClient.NotifyError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: VideoDecodeAccelerator.ResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProvidePictureBuffers
arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeClient.ProvidePictureBuffers_Params',
      packedSize: 24,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PictureBufferFormatSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoDecodeClientPtr = arc.mojom.VideoDecodeClientRemote;
arc.mojom.VideoDecodeClientRequest = arc.mojom.VideoDecodeClientPendingReceiver;

