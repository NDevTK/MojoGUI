// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_home/app_home.mojom
// Module: app_home.mojom

'use strict';

// Module namespace
var app_home = app_home || {};
app_home.mojom = app_home.mojom || {};


// Enum: RunOnOsLoginMode
app_home.mojom.RunOnOsLoginMode = {
};

// Enum: AppType
app_home.mojom.AppType = {
};

// Struct: AppInfo
app_home.mojom.AppInfo = class {
  constructor(values = {}) {
    this.may_toggle_run_on_os_login_mode = values.may_toggle_run_on_os_login_mode !== undefined ? values.may_toggle_run_on_os_login_mode : false;
    this.store_page_url = values.store_page_url !== undefined ? values.store_page_url : false;
  }
};

// Struct: ClickEvent
app_home.mojom.ClickEvent = class {
  constructor(values = {}) {
    this.shift_key = values.shift_key !== undefined ? values.shift_key : 0;
  }
};

// Interface: PageHandlerFactory
app_home.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_home.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

app_home.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
app_home.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_home.mojom.PageHandler';
  }

  getApps() {
    // Method: GetApps
    return new Promise((resolve) => {
      // Call: GetApps()
      resolve({});
    });
  }

  getDeprecationLinkString() {
    // Method: GetDeprecationLinkString
    return new Promise((resolve) => {
      // Call: GetDeprecationLinkString()
      resolve({});
    });
  }

  uninstallApp(app_id) {
    // Method: UninstallApp
    // Call: UninstallApp(app_id)
  }

  showAppSettings(app_id) {
    // Method: ShowAppSettings
    // Call: ShowAppSettings(app_id)
  }

  createAppShortcut(app_id) {
    // Method: CreateAppShortcut
    // Call: CreateAppShortcut(app_id)
  }

  launchApp(app_id, click_event) {
    // Method: LaunchApp
    // Call: LaunchApp(app_id, click_event)
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Method: SetRunOnOsLoginMode
    // Call: SetRunOnOsLoginMode(app_id, run_on_os_login_mode)
  }

  launchDeprecatedAppDialog() {
    // Method: LaunchDeprecatedAppDialog
    // Call: LaunchDeprecatedAppDialog()
  }

  installAppLocally(app_id) {
    // Method: InstallAppLocally
    // Call: InstallAppLocally(app_id)
  }

  setUserDisplayMode(app_id, display_mode) {
    // Method: SetUserDisplayMode
    // Call: SetUserDisplayMode(app_id, display_mode)
  }

};

app_home.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
app_home.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_home.mojom.Page';
  }

  addApp(app_info) {
    // Method: AddApp
    // Call: AddApp(app_info)
  }

  removeApp(app_info) {
    // Method: RemoveApp
    // Call: RemoveApp(app_info)
  }

  updateApp(app_info) {
    // Method: UpdateApp
    // Call: UpdateApp(app_info)
  }

};

app_home.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
