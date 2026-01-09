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

// Interface: VideoDecodeAccelerator
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
}};

// Legacy compatibility
arc.mojom.VideoDecodeAcceleratorPtr = arc.mojom.VideoDecodeAcceleratorRemote;
arc.mojom.VideoDecodeAcceleratorRequest = arc.mojom.VideoDecodeAcceleratorPendingReceiver;


// Interface: VideoDecodeClient
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
}};

// Legacy compatibility
arc.mojom.VideoDecodeClientPtr = arc.mojom.VideoDecodeClientRemote;
arc.mojom.VideoDecodeClientRequest = arc.mojom.VideoDecodeClientPendingReceiver;

