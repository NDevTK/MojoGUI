// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/app_install/app_install.mojom
// Module: ash.app_install.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.app_install = ash.app_install || {};
ash.app_install.mojom = ash.app_install.mojom || {};


// Struct: AppInfoArgs
ash.app_install.mojom.AppInfoArgs = class {
  constructor(values = {}) {
    this.actions = values.actions !== undefined ? values.actions : null;
  }
};

// Struct: AppInfoData
ash.app_install.mojom.AppInfoData = class {
  constructor(values = {}) {
    this.is_already_installed = values.is_already_installed !== undefined ? values.is_already_installed : false;
  }
};

// Struct: Screenshot
ash.app_install.mojom.Screenshot = class {
  constructor(values = {}) {
    this.size = values.size !== undefined ? values.size : null;
  }
};

// Struct: NoAppErrorArgs
ash.app_install.mojom.NoAppErrorArgs = class {
  constructor(values = {}) {
  }
};

// Interface: AppInfoActions
ash.app_install.mojom.AppInfoActionsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.app_install.mojom.AppInfoActions';
  }

  installApp() {
    // Method: InstallApp
    return new Promise((resolve) => {
      // Call: InstallApp()
      resolve({});
    });
  }

  launchApp() {
    // Method: LaunchApp
    // Call: LaunchApp()
  }

};

ash.app_install.mojom.AppInfoActionsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectionErrorActions
ash.app_install.mojom.ConnectionErrorActionsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.app_install.mojom.ConnectionErrorActions';
  }

  tryAgain() {
    // Method: TryAgain
    // Call: TryAgain()
  }

};

ash.app_install.mojom.ConnectionErrorActionsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
ash.app_install.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.app_install.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.app_install.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.app_install.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.app_install.mojom.PageHandler';
  }

  getDialogArgs() {
    // Method: GetDialogArgs
    return new Promise((resolve) => {
      // Call: GetDialogArgs()
      resolve({});
    });
  }

  closeDialog() {
    // Method: CloseDialog
    // Call: CloseDialog()
  }

};

ash.app_install.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
