// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.ResultSpec = { $: mojo.internal.Enum() };
arc.mojom.BitstreamBufferSpec = { $: {} };
arc.mojom.PictureSpec = { $: {} };
arc.mojom.PictureBufferFormatSpec = { $: {} };
arc.mojom.VideoDecodeAcceleratorConfigSpec = { $: {} };
arc.mojom.BufferModifierSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator = {};
arc.mojom.VideoDecodeAccelerator.$interfaceName = 'arc.mojom.VideoDecodeAccelerator';
arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecodeClient = {};
arc.mojom.VideoDecodeClient.$interfaceName = 'arc.mojom.VideoDecodeClient';
arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec = { $: {} };
arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec = { $: {} };

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

// Struct: BitstreamBuffer
mojo.internal.Struct(
    arc.mojom.BitstreamBufferSpec, 'arc.mojom.BitstreamBuffer', [
      mojo.internal.StructField('bitstream_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 4, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_used', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Picture
mojo.internal.Struct(
    arc.mojom.PictureSpec, 'arc.mojom.Picture', [
      mojo.internal.StructField('picture_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bitstream_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('crop_rect', 8, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PictureBufferFormat
mojo.internal.Struct(
    arc.mojom.PictureBufferFormatSpec, 'arc.mojom.PictureBufferFormat', [
      mojo.internal.StructField('min_num_buffers', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoDecodeAcceleratorConfig
mojo.internal.Struct(
    arc.mojom.VideoDecodeAcceleratorConfigSpec, 'arc.mojom.VideoDecodeAcceleratorConfig', [
      mojo.internal.StructField('profile', 0, 0, arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure_mode', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BufferModifier
mojo.internal.Struct(
    arc.mojom.BufferModifierSpec, 'arc.mojom.BufferModifier', [
      mojo.internal.StructField('val', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: VideoDecodeAccelerator
mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.VideoDecodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoDecodeClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Decode_Params', [
      mojo.internal.StructField('bitstream_buffer', 0, 0, arc.mojom.BitstreamBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_Params', [
      mojo.internal.StructField('picture_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('format', 8, 0, arc.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 16, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('planes', 24, 0, mojo.internal.Array(arc.mojom.VideoFramePlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 32, 0, arc.mojom.BufferModifierSpec.$, null, true, 4, undefined),
    ],
    [[0, 40], [4, 48]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_Params', [
      mojo.internal.StructField('picture_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Reset_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [config, client],
      false);
  }

  decode(bitstream_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec,
      null,
      [bitstream_buffer],
      false);
  }

  assignPictureBuffers(count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec,
      null,
      [count],
      false);
  }

  importBufferForPicture(picture_buffer_id, format, handle_fd, planes, modifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec,
      null,
      [picture_buffer_id, format, handle_fd, planes, modifier],
      false);
  }

  reusePictureBuffer(picture_buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec,
      null,
      [picture_buffer_id],
      false);
  }

  reset() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec,
      arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec,
      arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.VideoDecodeAcceleratorPtr = arc.mojom.VideoDecodeAcceleratorRemote;
arc.mojom.VideoDecodeAcceleratorRequest = arc.mojom.VideoDecodeAcceleratorPendingReceiver;


// Interface: VideoDecodeClient
mojo.internal.Struct(
    arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec, 'arc.mojom.VideoDecodeClient_PictureReady_Params', [
      mojo.internal.StructField('picture', 0, 0, arc.mojom.PictureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec, 'arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_Params', [
      mojo.internal.StructField('bitstream_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec, 'arc.mojom.VideoDecodeClient_NotifyError_Params', [
      mojo.internal.StructField('error', 0, 0, VideoDecodeAccelerator.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec, 'arc.mojom.VideoDecodeClient_ProvidePictureBuffers_Params', [
      mojo.internal.StructField('format', 0, 0, arc.mojom.PictureBufferFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 8, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [picture],
      false);
  }

  notifyEndOfBitstreamBuffer(bitstream_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec,
      null,
      [bitstream_id],
      false);
  }

  notifyError(error) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec,
      null,
      [error],
      false);
  }

  providePictureBuffers(format, visible_rect) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec,
      null,
      [format, visible_rect],
      false);
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

arc.mojom.VideoDecodeClientPtr = arc.mojom.VideoDecodeClientRemote;
arc.mojom.VideoDecodeClientRequest = arc.mojom.VideoDecodeClientPendingReceiver;

