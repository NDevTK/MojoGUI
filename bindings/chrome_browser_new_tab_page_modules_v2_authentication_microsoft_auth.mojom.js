// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/authentication/microsoft_auth.mojom
// Module: ntp.authentication.mojom

'use strict';

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
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dismissModule() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dismissModule();
          break;
        }
        case 1: {
          const params = ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreModule();
          break;
        }
        case 2: {
          const params = ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldShowModule();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ntp.authentication.mojom.MicrosoftAuthPageHandlerReceiver = ntp.authentication.mojom.MicrosoftAuthPageHandlerReceiver;

ntp.authentication.mojom.MicrosoftAuthPageHandlerPtr = ntp.authentication.mojom.MicrosoftAuthPageHandlerRemote;
ntp.authentication.mojom.MicrosoftAuthPageHandlerRequest = ntp.authentication.mojom.MicrosoftAuthPageHandlerPendingReceiver;

