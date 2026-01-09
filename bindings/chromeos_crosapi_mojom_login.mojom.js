// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: ExternalLogoutRequestObserver
crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ExternalLogoutRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.ExternalLogoutRequestObserver.getRemote = function() {
  let remote = new crosapi.mojom.ExternalLogoutRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ExternalLogoutRequestObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
crosapi.mojom.LoginPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LoginRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Login';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LoginPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LoginRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LoginRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.Login.getRemote = function() {
  let remote = new crosapi.mojom.LoginRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Login',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

