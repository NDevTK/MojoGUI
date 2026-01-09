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

// Struct: BitstreamBuffer
arc.mojom.BitstreamBufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BitstreamBuffer',
      packedSize: 24,
      fields: [
        { name: 'bitstream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'handle_fd', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bytes_used', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'picture_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bitstream_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'crop_rect', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'min_num_buffers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'coded_size', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDecodeAcceleratorConfig
arc.mojom.VideoDecodeAcceleratorConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecodeAcceleratorConfig',
      packedSize: 24,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false },
        { name: 'secure_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'val', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.VideoDecodeClientPtr = arc.mojom.VideoDecodeClientRemote;
arc.mojom.VideoDecodeClientRequest = arc.mojom.VideoDecodeClientPendingReceiver;

