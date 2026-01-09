// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ObbMounterHost
arc.mojom.ObbMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ObbMounterHost.getRemote = function() {
  let remote = new arc.mojom.ObbMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ObbMounterHostPtr = arc.mojom.ObbMounterHostRemote;
arc.mojom.ObbMounterHostRequest = arc.mojom.ObbMounterHostPendingReceiver;


// Interface: ObbMounterInstance
arc.mojom.ObbMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ObbMounterInstance.getRemote = function() {
  let remote = new arc.mojom.ObbMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ObbMounterInstancePtr = arc.mojom.ObbMounterInstanceRemote;
arc.mojom.ObbMounterInstanceRequest = arc.mojom.ObbMounterInstancePendingReceiver;

