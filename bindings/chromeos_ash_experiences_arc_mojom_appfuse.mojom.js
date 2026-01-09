// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/appfuse.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AppfuseHost
arc.mojom.AppfuseHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AppfuseHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AppfuseHost.getRemote = function() {
  let remote = new arc.mojom.AppfuseHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AppfuseHostPtr = arc.mojom.AppfuseHostRemote;
arc.mojom.AppfuseHostRequest = arc.mojom.AppfuseHostPendingReceiver;


// Interface: AppfuseInstance
arc.mojom.AppfuseInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AppfuseInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AppfuseInstance.getRemote = function() {
  let remote = new arc.mojom.AppfuseInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AppfuseInstancePtr = arc.mojom.AppfuseInstanceRemote;
arc.mojom.AppfuseInstanceRequest = arc.mojom.AppfuseInstancePendingReceiver;

