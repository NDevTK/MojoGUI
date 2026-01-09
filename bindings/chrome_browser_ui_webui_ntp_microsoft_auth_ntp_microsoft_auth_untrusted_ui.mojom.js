// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Interface: MicrosoftAuthUntrustedDocumentInterfacesFactory
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory = {};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToParentDocument(child_document) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec,
      null,
      [child_document]);
  }

  createPageHandler(handler, document) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, document]);
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.getRemote = function() {
  let remote = new new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToParentDocument
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.ConnectToParentDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'child_document', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreatePageHandler
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'document', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver;


// Interface: MicrosoftAuthUntrustedPageHandler
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler = {};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearAuthData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec,
      null,
      []);
  }

  maybeAcquireTokenSilent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec,
      null,
      []);
  }

  setAccessToken(access_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec,
      null,
      [access_token]);
  }

  setAuthStateError(error_code, error_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec,
      null,
      [error_code, error_message]);
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.getRemote = function() {
  let remote = new new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ClearAuthData
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.ClearAuthData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MaybeAcquireTokenSilent
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.MaybeAcquireTokenSilent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAccessToken
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.SetAccessToken_Params',
      packedSize: 16,
      fields: [
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAuthStateError
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.SetAuthStateError_Params',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver;

