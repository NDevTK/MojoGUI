// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/authentication/microsoft_auth.mojom
// Module: ntp.authentication.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ntp = ntp || {};
ntp.authentication = ntp.authentication || {};
ntp.authentication.mojom = ntp.authentication.mojom || {};

ntp.authentication.mojom.MicrosoftAuthPageHandler = {};
ntp.authentication.mojom.MicrosoftAuthPageHandler.$interfaceName = 'ntp.authentication.mojom.MicrosoftAuthPageHandler';
ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec = { $: {} };
ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec = { $: {} };
ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec = { $: {} };

// Interface: MicrosoftAuthPageHandler
mojo.internal.Struct(
    ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec, 'ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec, 'ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec, 'ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec, 'ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParams', [
      mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ntp.authentication.mojom.MicrosoftAuthPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.authentication.mojom.MicrosoftAuthPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.authentication.mojom.MicrosoftAuthPageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.authentication.mojom.MicrosoftAuthPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dismissModule() {
    return this.$.dismissModule();
  }
  restoreModule() {
    return this.$.restoreModule();
  }
  shouldShowModule() {
    return this.$.shouldShowModule();
  }
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  dismissModule() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowModule() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec,
      ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec,
      [],
      false);
  }

};

ntp.authentication.mojom.MicrosoftAuthPageHandler.getRemote = function() {
  let remote = new ntp.authentication.mojom.MicrosoftAuthPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.authentication.mojom.MicrosoftAuthPageHandler',
    'context');
  return remote.$;
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MicrosoftAuthPageHandler', [
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.dismissModule();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.restoreModule();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec.$.structSpec);
          const result = this.impl.shouldShowModule();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerReceiver = ntp.authentication.mojom.MicrosoftAuthPageHandlerReceiver;

ntp.authentication.mojom.MicrosoftAuthPageHandlerPtr = ntp.authentication.mojom.MicrosoftAuthPageHandlerRemote;
ntp.authentication.mojom.MicrosoftAuthPageHandlerRequest = ntp.authentication.mojom.MicrosoftAuthPageHandlerPendingReceiver;

