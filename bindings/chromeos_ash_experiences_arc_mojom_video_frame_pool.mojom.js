// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_frame_pool.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.VideoFrameSpec = { $: {} };
arc.mojom.VideoFramePool = {};
arc.mojom.VideoFramePool.$interfaceName = 'arc.mojom.VideoFramePool';
arc.mojom.VideoFramePool_Initialize_ParamsSpec = { $: {} };
arc.mojom.VideoFramePool_AddVideoFrame_ParamsSpec = { $: {} };
arc.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec = { $: {} };
arc.mojom.VideoFramePoolClient = {};
arc.mojom.VideoFramePoolClient.$interfaceName = 'arc.mojom.VideoFramePoolClient';
arc.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec = { $: {} };
arc.mojom.VideoFramePoolClient_RequestVideoFrames_ResponseParamsSpec = { $: {} };

// Struct: VideoFrame
mojo.internal.Struct(
    arc.mojom.VideoFrameSpec, 'arc.mojom.VideoFrame', [
      mojo.internal.StructField('id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, arc.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('format', 36, 0, arc.mojom.HalPixelFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('planes', 16, 0, mojo.internal.Array(arc.mojom.VideoFramePlaneSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: VideoFramePool
mojo.internal.Struct(
    arc.mojom.VideoFramePool_Initialize_ParamsSpec, 'arc.mojom.VideoFramePool_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(arc.mojom.VideoFramePoolClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoFramePool_AddVideoFrame_ParamsSpec, 'arc.mojom.VideoFramePool_AddVideoFrame_Params', [
      mojo.internal.StructField('video_frame', 0, 0, arc.mojom.VideoFrameSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec, 'arc.mojom.VideoFramePool_AddVideoFrame_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoFramePoolPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoFramePoolRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoFramePool';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoFramePoolPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoFramePoolRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoFramePoolRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VideoFramePool_Initialize_ParamsSpec,
      null,
      [client]);
  }

  addVideoFrame(video_frame) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoFramePool_AddVideoFrame_ParamsSpec,
      arc.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec,
      [video_frame]);
  }

};

arc.mojom.VideoFramePool.getRemote = function() {
  let remote = new arc.mojom.VideoFramePoolRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoFramePool',
    'context');
  return remote.$;
};

arc.mojom.VideoFramePoolPtr = arc.mojom.VideoFramePoolRemote;
arc.mojom.VideoFramePoolRequest = arc.mojom.VideoFramePoolPendingReceiver;


// Interface: VideoFramePoolClient
mojo.internal.Struct(
    arc.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec, 'arc.mojom.VideoFramePoolClient_RequestVideoFrames_Params', [
      mojo.internal.StructField('format', 16, 0, arc.mojom.VideoPixelFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 0, 0, arc.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 8, 0, arc.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('num_frames', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoFramePoolClient_RequestVideoFrames_ResponseParamsSpec, 'arc.mojom.VideoFramePoolClient_RequestVideoFrames_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

arc.mojom.VideoFramePoolClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoFramePoolClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoFramePoolClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoFramePoolClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoFramePoolClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoFramePoolClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestVideoFrames(format, coded_size, visible_rect, num_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec,
      arc.mojom.VideoFramePoolClient_RequestVideoFrames_ResponseParamsSpec,
      [format, coded_size, visible_rect, num_frames]);
  }

};

arc.mojom.VideoFramePoolClient.getRemote = function() {
  let remote = new arc.mojom.VideoFramePoolClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoFramePoolClient',
    'context');
  return remote.$;
};

arc.mojom.VideoFramePoolClientPtr = arc.mojom.VideoFramePoolClientRemote;
arc.mojom.VideoFramePoolClientRequest = arc.mojom.VideoFramePoolClientPendingReceiver;

