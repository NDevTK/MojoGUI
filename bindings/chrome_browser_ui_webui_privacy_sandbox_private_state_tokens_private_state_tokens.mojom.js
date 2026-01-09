// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/private_state_tokens/private_state_tokens.mojom
// Module: private_state_tokens.mojom

'use strict';

// Module namespace
var private_state_tokens = private_state_tokens || {};
private_state_tokens.mojom = private_state_tokens.mojom || {};


// Struct: IssuerTokenCount
private_state_tokens.mojom.IssuerTokenCount = class {
  constructor(values = {}) {
    this.count = values.count !== undefined ? values.count : 0;
  }
};

// Interface: PrivateStateTokensPageHandler
private_state_tokens.mojom.PrivateStateTokensPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'private_state_tokens.mojom.PrivateStateTokensPageHandler';
  }

  getIssuerTokenCounts() {
    // Method: GetIssuerTokenCounts
    return new Promise((resolve) => {
      // Call: GetIssuerTokenCounts()
      resolve({});
    });
  }

};

private_state_tokens.mojom.PrivateStateTokensPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
