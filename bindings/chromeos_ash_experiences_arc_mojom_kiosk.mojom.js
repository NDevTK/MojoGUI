// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: KioskHost
arc.mojom.KioskHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.KioskHost.getRemote = function() {
  let remote = new arc.mojom.KioskHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.KioskHostPtr = arc.mojom.KioskHostRemote;
arc.mojom.KioskHostRequest = arc.mojom.KioskHostPendingReceiver;


// Interface: KioskInstance
arc.mojom.KioskInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.KioskInstance.getRemote = function() {
  let remote = new arc.mojom.KioskInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.KioskInstancePtr = arc.mojom.KioskInstanceRemote;
arc.mojom.KioskInstanceRequest = arc.mojom.KioskInstancePendingReceiver;

