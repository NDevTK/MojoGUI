// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};
var ui = ui || {};

new_tab_page.mojom.AccessTokenSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory = {};
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory.$interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory';
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler = {};
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler.$interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler';
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec = { $: {} };
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec = { $: {} };

// Struct: AccessToken
mojo.internal.Struct(
    new_tab_page.mojom.AccessTokenSpec, 'new_tab_page.mojom.AccessToken', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MicrosoftAuthUntrustedDocumentInterfacesFactory
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_Params', [
      mojo.internal.StructField('child_document', 0, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('document', 8, 0, mojo.internal.InterfaceProxy(new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver;


// Interface: MicrosoftAuthUntrustedPageHandler
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_Params', [
      mojo.internal.StructField('access_token', 0, 0, new_tab_page.mojom.AccessTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver;

