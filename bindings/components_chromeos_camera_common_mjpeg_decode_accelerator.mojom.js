// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/mjpeg_decode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};


// Enum: DecodeError
chromeos_camera.mojom.DecodeError = {
  NO_ERRORS: 0,
  INVALID_ARGUMENT: 1,
  UNREADABLE_INPUT: 2,
  PARSE_JPEG_FAILED: 3,
  UNSUPPORTED_JPEG: 4,
  PLATFORM_FAILURE: 5,
};

// Struct: BitstreamBuffer
chromeos_camera.mojom.BitstreamBufferSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.BitstreamBuffer',
      packedSize: 64,
      fields: [
        { name: 'memory_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'iv', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'subsamples', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'size', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MjpegDecodeAccelerator
chromeos_camera.mojom.MjpegDecodeAccelerator = {};

chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos_camera.mojom.MjpegDecodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'chromeos_camera.mojom.MjpegDecodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver,
      handle);
    this.$ = new chromeos_camera.mojom.MjpegDecodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos_camera.mojom.MjpegDecodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos_camera.mojom.MjpegDecodeAccelerator.getRemote = function() {
  let remote = new chromeos_camera.mojom.MjpegDecodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos_camera.mojom.MjpegDecodeAccelerator',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos_camera.mojom.MjpegDecodeAcceleratorPtr = chromeos_camera.mojom.MjpegDecodeAcceleratorRemote;
chromeos_camera.mojom.MjpegDecodeAcceleratorRequest = chromeos_camera.mojom.MjpegDecodeAcceleratorPendingReceiver;

