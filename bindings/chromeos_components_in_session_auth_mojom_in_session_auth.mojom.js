// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/in_session_auth/mojom/in_session_auth.mojom
// Module: chromeos.auth.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.auth = chromeos.auth || {};
chromeos.auth.mojom = chromeos.auth.mojom || {};


// Enum: Reason
chromeos.auth.mojom.Reason = {
  kAccessAuthenticationSettings: 0,
  kAccessMultideviceSettings: 1,
};

// Interface: InSessionAuth
chromeos.auth.mojom.InSessionAuthPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.auth.mojom.InSessionAuthRemote = class {
  static get $interfaceName() {
    return 'chromeos.auth.mojom.InSessionAuth';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.auth.mojom.InSessionAuthPendingReceiver,
      handle);
    this.$ = new chromeos.auth.mojom.InSessionAuthRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.auth.mojom.InSessionAuthRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.auth.mojom.InSessionAuth.getRemote = function() {
  let remote = new chromeos.auth.mojom.InSessionAuthRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.auth.mojom.InSessionAuth',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.auth.mojom.InSessionAuthPtr = chromeos.auth.mojom.InSessionAuthRemote;
chromeos.auth.mojom.InSessionAuthRequest = chromeos.auth.mojom.InSessionAuthPendingReceiver;

