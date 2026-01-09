// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/privacy_items.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: PrivacyItemsHost
arc.mojom.PrivacyItemsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrivacyItemsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrivacyItemsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrivacyItemsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrivacyItemsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrivacyItemsHost.getRemote = function() {
  let remote = new arc.mojom.PrivacyItemsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.PrivacyItemsHostPtr = arc.mojom.PrivacyItemsHostRemote;
arc.mojom.PrivacyItemsHostRequest = arc.mojom.PrivacyItemsHostPendingReceiver;


// Interface: PrivacyItemsInstance
arc.mojom.PrivacyItemsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrivacyItemsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrivacyItemsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrivacyItemsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrivacyItemsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrivacyItemsInstance.getRemote = function() {
  let remote = new arc.mojom.PrivacyItemsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.PrivacyItemsInstancePtr = arc.mojom.PrivacyItemsInstanceRemote;
arc.mojom.PrivacyItemsInstanceRequest = arc.mojom.PrivacyItemsInstancePendingReceiver;

