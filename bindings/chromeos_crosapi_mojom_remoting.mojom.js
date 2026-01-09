// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/remoting.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: Remoting
crosapi.mojom.Remoting = {};

crosapi.mojom.RemotingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.RemotingRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Remoting';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.RemotingPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.RemotingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.RemotingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.Remoting.getRemote = function() {
  let remote = new crosapi.mojom.RemotingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Remoting',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.RemotingPtr = crosapi.mojom.RemotingRemote;
crosapi.mojom.RemotingRequest = crosapi.mojom.RemotingPendingReceiver;

