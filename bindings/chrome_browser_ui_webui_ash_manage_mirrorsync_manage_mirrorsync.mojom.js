// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/manage_mirrorsync/manage_mirrorsync.mojom
// Module: ash.manage_mirrorsync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.manage_mirrorsync = ash.manage_mirrorsync || {};
ash.manage_mirrorsync.mojom = ash.manage_mirrorsync.mojom || {};


// Enum: GetSyncPathError
ash.manage_mirrorsync.mojom.GetSyncPathError = {
  kServiceUnavailable: 0,
  kSuccess: 1,
  kFailed: 2,
};

// Interface: PageHandlerFactory
ash.manage_mirrorsync.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.manage_mirrorsync.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.manage_mirrorsync.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.manage_mirrorsync.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.manage_mirrorsync.mojom.PageHandler';
  }

  getChildFolders(path) {
    // Method: GetChildFolders
    return new Promise((resolve) => {
      // Call: GetChildFolders(path)
      resolve({});
    });
  }

};

ash.manage_mirrorsync.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
