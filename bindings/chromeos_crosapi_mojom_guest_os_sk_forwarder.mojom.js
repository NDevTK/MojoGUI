// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/guest_os_sk_forwarder.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: GuestOsSkForwarderFactory
crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.GuestOsSkForwarderFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.GuestOsSkForwarderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.GuestOsSkForwarderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.GuestOsSkForwarderFactory.getRemote = function() {
  let remote = new crosapi.mojom.GuestOsSkForwarderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarderFactory',
    'context');
  return remote.$;
}};

// Legacy compatibility
crosapi.mojom.GuestOsSkForwarderFactoryPtr = crosapi.mojom.GuestOsSkForwarderFactoryRemote;
crosapi.mojom.GuestOsSkForwarderFactoryRequest = crosapi.mojom.GuestOsSkForwarderFactoryPendingReceiver;


// Interface: GuestOsSkForwarder
crosapi.mojom.GuestOsSkForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.GuestOsSkForwarderRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.GuestOsSkForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.GuestOsSkForwarderPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.GuestOsSkForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.GuestOsSkForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.GuestOsSkForwarder.getRemote = function() {
  let remote = new crosapi.mojom.GuestOsSkForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.GuestOsSkForwarder',
    'context');
  return remote.$;
}};

// Legacy compatibility
crosapi.mojom.GuestOsSkForwarderPtr = crosapi.mojom.GuestOsSkForwarderRemote;
crosapi.mojom.GuestOsSkForwarderRequest = crosapi.mojom.GuestOsSkForwarderPendingReceiver;

