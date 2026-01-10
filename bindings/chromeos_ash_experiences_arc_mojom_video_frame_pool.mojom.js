// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_frame_pool.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: VideoFrame
arc.mojom.mojom.VideoFrameSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFrame',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'handle_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 36, packedBitOffset: 0, type: arc.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.VideoFramePlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: VideoFramePool
arc.mojom.mojom.VideoFramePool = {};

arc.mojom.mojom.VideoFramePoolPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VideoFramePoolRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoFramePool';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VideoFramePoolPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VideoFramePoolRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VideoFramePoolRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.VideoFramePool_Initialize_ParamsSpec,
      null,
      [client]);
  }

  addVideoFrame(video_frame) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.VideoFramePool_AddVideoFrame_ParamsSpec,
      arc.mojom.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec,
      [video_frame]);
  }

};

arc.mojom.mojom.VideoFramePool.getRemote = function() {
  let remote = new arc.mojom.mojom.VideoFramePoolRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoFramePool',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
arc.mojom.mojom.VideoFramePool_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePool.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(arc.mojom.VideoFramePoolClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddVideoFrame
arc.mojom.mojom.VideoFramePool_AddVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePool.AddVideoFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'video_frame', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoFrameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePool.AddVideoFrame_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VideoFramePoolPtr = arc.mojom.mojom.VideoFramePoolRemote;
arc.mojom.mojom.VideoFramePoolRequest = arc.mojom.mojom.VideoFramePoolPendingReceiver;


// Interface: VideoFramePoolClient
arc.mojom.mojom.VideoFramePoolClient = {};

arc.mojom.mojom.VideoFramePoolClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VideoFramePoolClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoFramePoolClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VideoFramePoolClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VideoFramePoolClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VideoFramePoolClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestVideoFrames(format, coded_size, visible_rect, num_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec,
      null,
      [format, coded_size, visible_rect, num_frames]);
  }

};

arc.mojom.mojom.VideoFramePoolClient.getRemote = function() {
  let remote = new arc.mojom.mojom.VideoFramePoolClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoFramePoolClient',
    'context');
  return remote.$;
};

// ParamsSpec for RequestVideoFrames
arc.mojom.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePoolClient.RequestVideoFrames_Params',
      packedSize: 32,
      fields: [
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'num_frames', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VideoFramePoolClientPtr = arc.mojom.mojom.VideoFramePoolClientRemote;
arc.mojom.mojom.VideoFramePoolClientRequest = arc.mojom.mojom.VideoFramePoolClientPendingReceiver;

