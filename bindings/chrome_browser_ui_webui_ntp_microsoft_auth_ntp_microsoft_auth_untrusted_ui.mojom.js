// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_untrusted_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Struct: AccessToken
new_tab_page.mojom.AccessToken = class {
  constructor(values = {}) {
    this.expiration = values.expiration !== undefined ? values.expiration : "";
  }
};

// Interface: MicrosoftAuthUntrustedDocumentInterfacesFactory
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory';
  }

  connectToParentDocument(child_document) {
    // Method: ConnectToParentDocument
    // Call: ConnectToParentDocument(child_document)
  }

  createPageHandler(handler, document) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler, document)
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MicrosoftAuthUntrustedPageHandler
new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler';
  }

  clearAuthData() {
    // Method: ClearAuthData
    // Call: ClearAuthData()
  }

  maybeAcquireTokenSilent() {
    // Method: MaybeAcquireTokenSilent
    // Call: MaybeAcquireTokenSilent()
  }

  setAccessToken(access_token) {
    // Method: SetAccessToken
    // Call: SetAccessToken(access_token)
  }

  setAuthStateError(error_code, error_message) {
    // Method: SetAuthStateError
    // Call: SetAuthStateError(error_code, error_message)
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
