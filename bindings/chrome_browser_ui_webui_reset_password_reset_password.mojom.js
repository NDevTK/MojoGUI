// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reset_password/reset_password.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: ResetPasswordHandler
mojom.ResetPasswordHandler = {};

mojom.ResetPasswordHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ResetPasswordHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.ResetPasswordHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ResetPasswordHandlerPendingReceiver,
      handle);
    this.$ = new mojom.ResetPasswordHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.ResetPasswordHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handlePasswordReset() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec,
      null,
      []);
  }

};

mojom.ResetPasswordHandler.getRemote = function() {
  let remote = new mojom.ResetPasswordHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ResetPasswordHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandlePasswordReset
mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ResetPasswordHandler.HandlePasswordReset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.ResetPasswordHandlerPtr = mojom.ResetPasswordHandlerRemote;
mojom.ResetPasswordHandlerRequest = mojom.ResetPasswordHandlerPendingReceiver;

