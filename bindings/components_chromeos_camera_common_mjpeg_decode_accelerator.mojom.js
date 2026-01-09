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

