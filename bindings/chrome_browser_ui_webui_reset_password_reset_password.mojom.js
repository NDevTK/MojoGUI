// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/reset_password/reset_password.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  handlePasswordReset() {
    return this.$.handlePasswordReset();
  }
};

mojom.ResetPasswordHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResetPasswordHandler', [
      { explicit: null },
    ]);
  }

  handlePasswordReset() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResetPasswordHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ResetPasswordHandler_HandlePasswordReset_ParamsSpec.$.structSpec);
          const result = this.impl.handlePasswordReset();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mojom.ResetPasswordHandlerReceiver = mojom.ResetPasswordHandlerReceiver;

mojom.ResetPasswordHandlerPtr = mojom.ResetPasswordHandlerRemote;
mojom.ResetPasswordHandlerRequest = mojom.ResetPasswordHandlerPendingReceiver;

