// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/authentication/microsoft_auth.mojom
// Module: ntp.authentication.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.authentication = ntp.authentication || {};
ntp.authentication.mojom = ntp.authentication.mojom || {};


// Interface: MicrosoftAuthPageHandler
ntp.authentication.mojom.MicrosoftAuthPageHandler = {};

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
      ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec.$,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec.$,
      null,
      []);
  }

  shouldShowModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec.$,
      ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for DismissModule
ntp.authentication.mojom.MicrosoftAuthPageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.authentication.mojom.MicrosoftAuthPageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.authentication.mojom.MicrosoftAuthPageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.authentication.mojom.MicrosoftAuthPageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldShowModule
ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.authentication.mojom.MicrosoftAuthPageHandler.ShouldShowModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ntp.authentication.mojom.MicrosoftAuthPageHandler_ShouldShowModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.authentication.mojom.MicrosoftAuthPageHandler.ShouldShowModule_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ntp.authentication.mojom.MicrosoftAuthPageHandlerPtr = ntp.authentication.mojom.MicrosoftAuthPageHandlerRemote;
ntp.authentication.mojom.MicrosoftAuthPageHandlerRequest = ntp.authentication.mojom.MicrosoftAuthPageHandlerPendingReceiver;

