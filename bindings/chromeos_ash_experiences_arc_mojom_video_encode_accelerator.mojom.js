// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_encode_accelerator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


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
  kErrorMax: 3,
};

// Enum: Result
arc.mojom.Result = {
  kSuccess: 0,
  kIllegalStateError: 1,
  kInvalidArgumentError: 2,
  kPlatformFailureError: 3,
  kInsufficientResourcesError: 4,
};

// Interface: VideoEncodeAccelerator
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
};

arc.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
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
}};

// Legacy compatibility
arc.mojom.VideoEncodeAcceleratorPtr = arc.mojom.VideoEncodeAcceleratorRemote;
arc.mojom.VideoEncodeAcceleratorRequest = arc.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeClient
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
};

arc.mojom.VideoEncodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
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
}};

// Legacy compatibility
arc.mojom.VideoEncodeClientPtr = arc.mojom.VideoEncodeClientRemote;
arc.mojom.VideoEncodeClientRequest = arc.mojom.VideoEncodeClientPendingReceiver;

