// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoHost
arc.mojom.VideoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoHost.getRemote = function() {
  let remote = new arc.mojom.VideoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoHostPtr = arc.mojom.VideoHostRemote;
arc.mojom.VideoHostRequest = arc.mojom.VideoHostPendingReceiver;


// Interface: VideoInstance
arc.mojom.VideoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoInstance.getRemote = function() {
  let remote = new arc.mojom.VideoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoInstancePtr = arc.mojom.VideoInstanceRemote;
arc.mojom.VideoInstanceRequest = arc.mojom.VideoInstancePendingReceiver;


// Interface: VideoAcceleratorFactory
arc.mojom.VideoAcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoAcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoAcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoAcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoAcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoAcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoAcceleratorFactory.getRemote = function() {
  let remote = new arc.mojom.VideoAcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoAcceleratorFactory',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoAcceleratorFactoryPtr = arc.mojom.VideoAcceleratorFactoryRemote;
arc.mojom.VideoAcceleratorFactoryRequest = arc.mojom.VideoAcceleratorFactoryPendingReceiver;

