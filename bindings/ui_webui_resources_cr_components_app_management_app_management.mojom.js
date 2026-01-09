// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/app_management/app_management.mojom
// Module: app_management.mojom

'use strict';

// Module namespace
var app_management = app_management || {};
app_management.mojom = app_management.mojom || {};


// Enum: AppType
app_management.mojom.AppType = {
  kUnknown: 0,
  kArc: 1,
  see: 2,
  see: 3,
  see: 4,
};

// Enum: PermissionType
app_management.mojom.PermissionType = {
  kUnknown: 0,
  kCamera: 1,
  kLocation: 2,
  kMicrophone: 3,
  kNotifications: 4,
  kContacts: 5,
  kStorage: 6,
  kPrinting: 7,
  kFileHandling: 8,
};

// Enum: TriState
app_management.mojom.TriState = {
  kAllow: 0,
  kBlock: 1,
  kAsk: 2,
};

// Enum: InstallReason
app_management.mojom.InstallReason = {
  kUnknown: 0,
  kSystem: 1,
  but: 2,
  no: 3,
};

// Enum: InstallSource
app_management.mojom.InstallSource = {
  kUnknown: 0,
  kSystem: 1,
};

// Enum: WindowMode
app_management.mojom.WindowMode = {
  kUnknown: 0,
};

// Enum: RunOnOsLoginMode
app_management.mojom.RunOnOsLoginMode = {
  kUnknown: 0,
};

// Struct: Permission
app_management.mojom.Permission = class {
  constructor(values = {}) {
    this.details = values.details !== undefined ? values.details : false;
  }
};

// Struct: RunOnOsLogin
app_management.mojom.RunOnOsLogin = class {
  constructor(values = {}) {
    this.is_managed = values.is_managed !== undefined ? values.is_managed : false;
  }
};

// Struct: Locale
app_management.mojom.Locale = class {
  constructor(values = {}) {
    this.to = values.to !== undefined ? values.to : null;
    this.locale_tag = values.locale_tag !== undefined ? values.locale_tag : "";
    this.display_name = values.display_name !== undefined ? values.display_name : "";
    this.native_display_name = values.native_display_name !== undefined ? values.native_display_name : "";
  }
};

// Struct: App
app_management.mojom.App = class {
  constructor(values = {}) {
    this.publisher_id = values.publisher_id !== undefined ? values.publisher_id : false;
    this.formatted_origin = values.formatted_origin !== undefined ? values.formatted_origin : "";
    this.disable_user_choice_navigation_capturing = values.disable_user_choice_navigation_capturing !== undefined ? values.disable_user_choice_navigation_capturing : false;
  }
};

// Struct: ExtensionAppPermissionMessage
app_management.mojom.ExtensionAppPermissionMessage = class {
  constructor(values = {}) {
    this.submessages = values.submessages !== undefined ? values.submessages : "";
  }
};

// Struct: FileHandlingState
app_management.mojom.FileHandlingState = class {
  constructor(values = {}) {
    this.is_managed = values.is_managed !== undefined ? values.is_managed : false;
    this.user_visible_types_label = values.user_visible_types_label !== undefined ? values.user_visible_types_label : "";
    this.learn_more_url = values.learn_more_url !== undefined ? values.learn_more_url : null;
  }
};

// Interface: PageHandlerFactory
app_management.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_management.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

app_management.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
app_management.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_management.mojom.PageHandler';
  }

  getApps() {
    // Method: GetApps
    return new Promise((resolve) => {
      // Call: GetApps()
      resolve({});
    });
  }

  getApp(app_id) {
    // Method: GetApp
    return new Promise((resolve) => {
      // Call: GetApp(app_id)
      resolve({});
    });
  }

  getSubAppToParentMap() {
    // Method: GetSubAppToParentMap
    return new Promise((resolve) => {
      // Call: GetSubAppToParentMap()
      resolve({});
    });
  }

  getExtensionAppPermissionMessages(app_id) {
    // Method: GetExtensionAppPermissionMessages
    return new Promise((resolve) => {
      // Call: GetExtensionAppPermissionMessages(app_id)
      resolve({});
    });
  }

  setPinned(app_id, pinned) {
    // Method: SetPinned
    // Call: SetPinned(app_id, pinned)
  }

  setPermission(app_id, permission) {
    // Method: SetPermission
    // Call: SetPermission(app_id, permission)
  }

  setResizeLocked(app_id, locked) {
    // Method: SetResizeLocked
    // Call: SetResizeLocked(app_id, locked)
  }

  uninstall(app_id) {
    // Method: Uninstall
    // Call: Uninstall(app_id)
  }

  openNativeSettings(app_id) {
    // Method: OpenNativeSettings
    // Call: OpenNativeSettings(app_id)
  }

  setPreferredApp(app_id, is_preferred_app) {
    // Method: SetPreferredApp
    // Call: SetPreferredApp(app_id, is_preferred_app)
  }

  getOverlappingPreferredApps(app_id) {
    // Method: GetOverlappingPreferredApps
    return new Promise((resolve) => {
      // Call: GetOverlappingPreferredApps(app_id)
      resolve({});
    });
  }

  updateAppSize(app_id) {
    // Method: UpdateAppSize
    // Call: UpdateAppSize(app_id)
  }

  setWindowMode(app_id, window_mode) {
    // Method: SetWindowMode
    // Call: SetWindowMode(app_id, window_mode)
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Method: SetRunOnOsLoginMode
    // Call: SetRunOnOsLoginMode(app_id, run_on_os_login_mode)
  }

  setFileHandlingEnabled(app_id, enabled) {
    // Method: SetFileHandlingEnabled
    // Call: SetFileHandlingEnabled(app_id, enabled)
  }

  showDefaultAppAssociationsUi() {
    // Method: ShowDefaultAppAssociationsUi
    // Call: ShowDefaultAppAssociationsUi()
  }

  openStorePage(app_id) {
    // Method: OpenStorePage
    // Call: OpenStorePage(app_id)
  }

  setAppLocale(app_id, locale_tag) {
    // Method: SetAppLocale
    // Call: SetAppLocale(app_id, locale_tag)
  }

  openSystemNotificationSettings(app_id) {
    // Method: OpenSystemNotificationSettings
    // Call: OpenSystemNotificationSettings(app_id)
  }

};

app_management.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
app_management.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'app_management.mojom.Page';
  }

  onAppAdded(app) {
    // Method: OnAppAdded
    // Call: OnAppAdded(app)
  }

  onAppChanged(update) {
    // Method: OnAppChanged
    // Call: OnAppChanged(update)
  }

  onAppRemoved(app_id) {
    // Method: OnAppRemoved
    // Call: OnAppRemoved(app_id)
  }

};

app_management.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
