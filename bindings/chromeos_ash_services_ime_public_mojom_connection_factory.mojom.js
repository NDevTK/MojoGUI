// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: ConnectionFactory
ash.ime.mojom.ConnectionFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.ConnectionFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ConnectionFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.ConnectionFactoryPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.ConnectionFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.ConnectionFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.ime.mojom.ConnectionFactory.getRemote = function() {
  let remote = new ash.ime.mojom.ConnectionFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ConnectionFactory',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.ime.mojom.ConnectionFactoryPtr = ash.ime.mojom.ConnectionFactoryRemote;
ash.ime.mojom.ConnectionFactoryRequest = ash.ime.mojom.ConnectionFactoryPendingReceiver;

