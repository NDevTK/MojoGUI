// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ntp_microsoft_auth/ntp_microsoft_auth_shared_ui.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Enum: AuthType
new_tab_page.mojom.AuthType = {
};

// Interface: MicrosoftAuthUntrustedDocument
new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.MicrosoftAuthUntrustedDocument';
  }

  acquireTokenPopup() {
    // Method: AcquireTokenPopup
    // Call: AcquireTokenPopup()
  }

  acquireTokenSilent() {
    // Method: AcquireTokenSilent
    // Call: AcquireTokenSilent()
  }

  signOut() {
    // Method: SignOut
    // Call: SignOut()
  }

};

new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
