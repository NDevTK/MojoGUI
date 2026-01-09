// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ScreenCaptureHost
arc.mojom.ScreenCaptureHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ScreenCaptureHost.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ScreenCaptureHostPtr = arc.mojom.ScreenCaptureHostRemote;
arc.mojom.ScreenCaptureHostRequest = arc.mojom.ScreenCaptureHostPendingReceiver;


// Interface: ScreenCaptureSession
arc.mojom.ScreenCaptureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureSessionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureSessionPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ScreenCaptureSession.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSession',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ScreenCaptureSessionPtr = arc.mojom.ScreenCaptureSessionRemote;
arc.mojom.ScreenCaptureSessionRequest = arc.mojom.ScreenCaptureSessionPendingReceiver;


// Interface: ScreenCaptureInstance
arc.mojom.ScreenCaptureInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ScreenCaptureInstance.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ScreenCaptureInstancePtr = arc.mojom.ScreenCaptureInstanceRemote;
arc.mojom.ScreenCaptureInstanceRequest = arc.mojom.ScreenCaptureInstancePendingReceiver;


// Interface: ScreenCaptureSessionNotifier
arc.mojom.ScreenCaptureSessionNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ScreenCaptureSessionNotifierRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSessionNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ScreenCaptureSessionNotifierPendingReceiver,
      handle);
    this.$ = new arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ScreenCaptureSessionNotifier.getRemote = function() {
  let remote = new arc.mojom.ScreenCaptureSessionNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSessionNotifier',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.ScreenCaptureSessionNotifierPtr = arc.mojom.ScreenCaptureSessionNotifierRemote;
arc.mojom.ScreenCaptureSessionNotifierRequest = arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

