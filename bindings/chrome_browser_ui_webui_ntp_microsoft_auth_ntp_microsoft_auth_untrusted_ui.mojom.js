// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('expiration', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
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
      [child_document],
      false);
  }

  createPageHandler(handler, document) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, document],
      false);
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

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver = class {
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
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_ConnectToParentDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToParentDocument(params.child_document);
          break;
        }
        case 1: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler, params.document);
          break;
        }
      }
    });
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPtr = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRequest = new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPendingReceiver;


// Interface: MicrosoftAuthUntrustedPageHandler
mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec, 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_Params', [
      mojo.internal.StructField('access_token', 0, 0, new_tab_page.mojom.AccessTokenSpec.$, null, false, 0, undefined),
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
      [],
      false);
  }

  maybeAcquireTokenSilent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec,
      null,
      [],
      false);
  }

  setAccessToken(access_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec,
      null,
      [access_token],
      false);
  }

  setAuthStateError(error_code, error_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec,
      null,
      [error_code, error_message],
      false);
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

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver = class {
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
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_ClearAuthData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearAuthData();
          break;
        }
        case 1: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_MaybeAcquireTokenSilent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.maybeAcquireTokenSilent();
          break;
        }
        case 2: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAccessToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAccessToken(params.access_token);
          break;
        }
        case 3: {
          const params = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler_SetAuthStateError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAuthStateError(params.error_code, params.error_message);
          break;
        }
      }
    });
  }
};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerReceiver;

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRemote;
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPendingReceiver;

