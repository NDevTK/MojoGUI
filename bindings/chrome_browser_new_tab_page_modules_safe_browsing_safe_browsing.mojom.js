// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/safe_browsing/safe_browsing.mojom
// Module: ntp.safe_browsing.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.safe_browsing = ntp.safe_browsing || {};
ntp.safe_browsing.mojom = ntp.safe_browsing.mojom || {};

ntp.safe_browsing.mojom.SafeBrowsingHandler = {};
ntp.safe_browsing.mojom.SafeBrowsingHandler.$interfaceName = 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: SafeBrowsingHandler
mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParams', [
      mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver,
      handle);
    this.$ = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canShowModule() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec,
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec,
      [],
      false);
  }

  processModuleClick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec,
      null,
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp.safe_browsing.mojom.SafeBrowsingHandler.getRemote = function() {
  let remote = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.safe_browsing.mojom.SafeBrowsingHandler',
    'context');
  return remote.$;
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver = class {
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
          const params = ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.canShowModule();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec.$.decode(message.payload);
          const result = this.impl.processModuleClick();
          break;
        }
        case 2: {
          const params = ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dismissModule();
          break;
        }
        case 3: {
          const params = ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreModule();
          break;
        }
      }
    });
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver = ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver;

ntp.safe_browsing.mojom.SafeBrowsingHandlerPtr = ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote;
ntp.safe_browsing.mojom.SafeBrowsingHandlerRequest = ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver;

