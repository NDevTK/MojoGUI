// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.one_drive = ash.settings.one_drive || {};
ash.settings.one_drive.mojom = ash.settings.one_drive.mojom || {};


// Interface: PageHandlerFactory
ash.settings.one_drive.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.one_drive.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.settings.one_drive.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.settings.one_drive.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.one_drive.mojom.PageHandler';
  }

  getUserEmailAddress() {
    // Method: GetUserEmailAddress
    return new Promise((resolve) => {
      // Call: GetUserEmailAddress()
      resolve({});
    });
  }

  connectToOneDrive() {
    // Method: ConnectToOneDrive
    return new Promise((resolve) => {
      // Call: ConnectToOneDrive()
      resolve({});
    });
  }

  disconnectFromOneDrive() {
    // Method: DisconnectFromOneDrive
    return new Promise((resolve) => {
      // Call: DisconnectFromOneDrive()
      resolve({});
    });
  }

  openOneDriveFolder() {
    // Method: OpenOneDriveFolder
    return new Promise((resolve) => {
      // Call: OpenOneDriveFolder()
      resolve({});
    });
  }

};

ash.settings.one_drive.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.settings.one_drive.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.one_drive.mojom.Page';
  }

  onODFSMountOrUnmount() {
    // Method: OnODFSMountOrUnmount
    // Call: OnODFSMountOrUnmount()
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    // Method: OnAllowUserToRemoveODFSChanged
    // Call: OnAllowUserToRemoveODFSChanged(is_allowed)
  }

};

ash.settings.one_drive.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
