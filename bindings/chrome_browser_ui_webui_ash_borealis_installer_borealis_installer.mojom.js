// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/borealis_installer/borealis_installer.mojom
// Module: ash.borealis_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.borealis_installer = ash.borealis_installer || {};
ash.borealis_installer.mojom = ash.borealis_installer.mojom || {};


// Interface: PageHandlerFactory
ash.borealis_installer.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.borealis_installer.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.borealis_installer.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.borealis_installer.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.borealis_installer.mojom.PageHandler';
  }

  install() {
    // Method: Install
    // Call: Install()
  }

  shutDown() {
    // Method: ShutDown
    // Call: ShutDown()
  }

  launch() {
    // Method: Launch
    // Call: Launch()
  }

  cancelInstall() {
    // Method: CancelInstall
    // Call: CancelInstall()
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

  onPageClosed() {
    // Method: OnPageClosed
    // Call: OnPageClosed()
  }

  openStoragePage() {
    // Method: OpenStoragePage
    // Call: OpenStoragePage()
  }

};

ash.borealis_installer.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.borealis_installer.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.borealis_installer.mojom.Page';
  }

  onProgressUpdate(progress_fraction, label) {
    // Method: OnProgressUpdate
    // Call: OnProgressUpdate(progress_fraction, label)
  }

  onInstallFinished(error) {
    // Method: OnInstallFinished
    // Call: OnInstallFinished(error)
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

ash.borealis_installer.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
