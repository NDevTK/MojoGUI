// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_support.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: StartSupportSessionError
remoting.mojom.StartSupportSessionError = {
  kExistingAdminSession: 0,
};

// Interface: SupportHostObserver
remoting.mojom.SupportHostObserver = {};

remoting.mojom.SupportHostObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SupportHostObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SupportHostObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SupportHostObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SupportHostObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.SupportHostObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

remoting.mojom.SupportHostObserver.getRemote = function() {
  let remote = new remoting.mojom.SupportHostObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SupportHostObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
remoting.mojom.SupportHostObserverPtr = remoting.mojom.SupportHostObserverRemote;
remoting.mojom.SupportHostObserverRequest = remoting.mojom.SupportHostObserverPendingReceiver;

