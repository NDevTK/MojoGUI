// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: CameraService
arc.mojom.CameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.CameraService.getRemote = function() {
  let remote = new arc.mojom.CameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraService',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.CameraServicePtr = arc.mojom.CameraServiceRemote;
arc.mojom.CameraServiceRequest = arc.mojom.CameraServicePendingReceiver;


// Interface: CameraHost
arc.mojom.CameraHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.CameraHost.getRemote = function() {
  let remote = new arc.mojom.CameraHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.CameraHostPtr = arc.mojom.CameraHostRemote;
arc.mojom.CameraHostRequest = arc.mojom.CameraHostPendingReceiver;


// Interface: CameraInstance
arc.mojom.CameraInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CameraInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CameraInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CameraInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CameraInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CameraInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.CameraInstance.getRemote = function() {
  let remote = new arc.mojom.CameraInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CameraInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.CameraInstancePtr = arc.mojom.CameraInstanceRemote;
arc.mojom.CameraInstanceRequest = arc.mojom.CameraInstancePendingReceiver;

