// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_frame_pool.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: VideoFrame
arc.mojom.VideoFrameSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFrame',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.VideoFramePlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: VideoFramePool
arc.mojom.VideoFramePool = {};

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

// ParamsSpec for Initialize
arc.mojom.VideoFramePool_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePool.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddVideoFrame
arc.mojom.VideoFramePool_AddVideoFrame_ParamsSpec = {
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

arc.mojom.VideoFramePool_AddVideoFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoFramePoolPtr = arc.mojom.VideoFramePoolRemote;
arc.mojom.VideoFramePoolRequest = arc.mojom.VideoFramePoolPendingReceiver;


// Interface: VideoFramePoolClient
arc.mojom.VideoFramePoolClient = {};

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
      null,
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

// ParamsSpec for RequestVideoFrames
arc.mojom.VideoFramePoolClient_RequestVideoFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoFramePoolClient.RequestVideoFrames_Params',
      packedSize: 32,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'num_frames', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoFramePoolClientPtr = arc.mojom.VideoFramePoolClientRemote;
arc.mojom.VideoFramePoolClientRequest = arc.mojom.VideoFramePoolClientPendingReceiver;

