// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reset_password/reset_password.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};

mojom.ResetPasswordHandler = {};
mojom.ResetPasswordHandler.$interfaceName = 'mojom.ResetPasswordHandler';
mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec = { $: {} };

// Interface: ResetPasswordHandler
mojo.internal.Struct(
    mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec, 'mojom.ResetPasswordHandler_HandlePasswordReset_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

mojom.ResetPasswordHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handlePasswordReset();
          break;
        }
      }
    });
  }
};

mojom.ResetPasswordHandlerReceiver = mojom.ResetPasswordHandlerReceiver;

mojom.ResetPasswordHandlerPtr = mojom.ResetPasswordHandlerRemote;
mojom.ResetPasswordHandlerRequest = mojom.ResetPasswordHandlerPendingReceiver;

