// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WakeLockHost
arc.mojom.WakeLockHost = {};

arc.mojom.WakeLockHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.WakeLockHost.getRemote = function() {
  let remote = new arc.mojom.WakeLockHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.WakeLockHostPtr = arc.mojom.WakeLockHostRemote;
arc.mojom.WakeLockHostRequest = arc.mojom.WakeLockHostPendingReceiver;


// Interface: WakeLockInstance
arc.mojom.WakeLockInstance = {};

arc.mojom.WakeLockInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.WakeLockInstance.getRemote = function() {
  let remote = new arc.mojom.WakeLockInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.WakeLockInstancePtr = arc.mojom.WakeLockInstanceRemote;
arc.mojom.WakeLockInstanceRequest = arc.mojom.WakeLockInstancePendingReceiver;

