// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/crostini_installer/crostini_installer.mojom
// Module: ash.crostini_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.crostini_installer = ash.crostini_installer || {};
ash.crostini_installer.mojom = ash.crostini_installer.mojom || {};


// Interface: PageHandlerFactory
ash.crostini_installer.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.crostini_installer.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.crostini_installer.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.crostini_installer.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.crostini_installer.mojom.PageHandler';
  }

  install(disk_size, username) {
    // Method: Install
    // Call: Install(disk_size, username)
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

  cancelBeforeStart() {
    // Method: CancelBeforeStart
    // Call: CancelBeforeStart()
  }

  dialog(whatever) {
    // Method: dialog
    // Call: dialog(whatever)
  }

  requestClose() {
    // Method: RequestClose
    // Call: RequestClose()
  }

  spontaneously() {
    // Method: spontaneously
    // Call: spontaneously()
  }

  send() {
    // Method: send
    // Call: send()
  }

  onPageClosed() {
    // Method: OnPageClosed
    // Call: OnPageClosed()
  }

  crostini(to) {
    // Method: Crostini
    // Call: Crostini(to)
  }

  requestAmountOfFreeDiskSpace() {
    // Method: RequestAmountOfFreeDiskSpace
    return new Promise((resolve) => {
      // Call: RequestAmountOfFreeDiskSpace()
      resolve({});
    });
  }

};

ash.crostini_installer.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.crostini_installer.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.crostini_installer.mojom.Page';
  }

  onProgressUpdate(install_state, progress_fraction) {
    // Method: OnProgressUpdate
    // Call: OnProgressUpdate(install_state, progress_fraction)
  }

  onInstallFinished(error) {
    // Method: OnInstallFinished
    // Call: OnInstallFinished(error)
  }

  onCanceled() {
    // Method: OnCanceled
    // Call: OnCanceled()
  }

  onPageClosed() {
    // Method: OnPageClosed
    // Call: OnPageClosed()
  }

  requestClose() {
    // Method: RequestClose
    // Call: RequestClose()
  }

};

ash.crostini_installer.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
