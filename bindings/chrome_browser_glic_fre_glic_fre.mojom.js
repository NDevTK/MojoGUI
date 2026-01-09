// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/fre/glic_fre.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};


// Enum: FreWebUiState
glic.mojom.FreWebUiState = {
};

// Interface: FrePageHandlerFactory
glic.mojom.FrePageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.FrePageHandlerFactory';
  }

  createPageHandler(receiver) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(receiver)
  }

};

glic.mojom.FrePageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrePageHandler
glic.mojom.FrePageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'glic.mojom.FrePageHandler';
  }

  acceptFre() {
    // Method: AcceptFre
    // Call: AcceptFre()
  }

  rejectFre() {
    // Method: RejectFre
    // Call: RejectFre()
  }

  dismissFre(panel) {
    // Method: DismissFre
    // Call: DismissFre(panel)
  }

  freReloaded() {
    // Method: FreReloaded
    // Call: FreReloaded()
  }

  prepareForClient() {
    // Method: PrepareForClient
    return new Promise((resolve) => {
      // Call: PrepareForClient()
      resolve({});
    });
  }

  validateAndOpenLinkInNewTab(url) {
    // Method: ValidateAndOpenLinkInNewTab
    // Call: ValidateAndOpenLinkInNewTab(url)
  }

  webUiStateChanged(new_state) {
    // Method: WebUiStateChanged
    // Call: WebUiStateChanged(new_state)
  }

  exceededTimeoutError() {
    // Method: ExceededTimeoutError
    // Call: ExceededTimeoutError()
  }

  logWebUiLoadComplete() {
    // Method: LogWebUiLoadComplete
    // Call: LogWebUiLoadComplete()
  }

};

glic.mojom.FrePageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
