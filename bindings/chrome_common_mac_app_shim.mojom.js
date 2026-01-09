// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mac/app_shim.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: AppShimLaunchType
chrome.mojom.AppShimLaunchType = {
};

// Enum: AppShimLaunchResult
chrome.mojom.AppShimLaunchResult = {
};

// Enum: AppShimAttentionType
chrome.mojom.AppShimAttentionType = {
};

// Enum: AppShimLoginItemRestoreState
chrome.mojom.AppShimLoginItemRestoreState = {
};

// Enum: AppShimScreenReaderSupportMode
chrome.mojom.AppShimScreenReaderSupportMode = {
};

// Struct: ProfileMenuItem
chrome.mojom.ProfileMenuItem = class {
  constructor(values = {}) {
    this.profile_path = values.profile_path !== undefined ? values.profile_path : 0;
  }
};

// Struct: ApplicationDockMenuItem
chrome.mojom.ApplicationDockMenuItem = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: AppShimInfo
chrome.mojom.AppShimInfo = class {
  constructor(values = {}) {
    this.notification_action_handler = values.notification_action_handler !== undefined ? values.notification_action_handler : "";
  }
};

// Struct: FeatureState
chrome.mojom.FeatureState = class {
  constructor(values = {}) {
    this.disable_features = values.disable_features !== undefined ? values.disable_features : "";
  }
};

// Interface: AppShim
chrome.mojom.AppShimPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.AppShim';
  }

  createRemoteCocoaApplication(application) {
    // Method: CreateRemoteCocoaApplication
    // Call: CreateRemoteCocoaApplication(application)
  }

  createCommandDispatcherForWidget(widget_id) {
    // Method: CreateCommandDispatcherForWidget
    // Call: CreateCommandDispatcherForWidget(widget_id)
  }

  setUserAttention(attention_type) {
    // Method: SetUserAttention
    // Call: SetUserAttention(attention_type)
  }

  setBadgeLabel(badge_label) {
    // Method: SetBadgeLabel
    // Call: SetBadgeLabel(badge_label)
  }

  updateProfileMenu(profile_menu_items) {
    // Method: UpdateProfileMenu
    // Call: UpdateProfileMenu(profile_menu_items)
  }

  updateApplicationDockMenu(dock_menu_items) {
    // Method: UpdateApplicationDockMenu
    // Call: UpdateApplicationDockMenu(dock_menu_items)
  }

  bindNotificationProvider(provider) {
    // Method: BindNotificationProvider
    // Call: BindNotificationProvider(provider)
  }

  requestNotificationPermission() {
    // Method: RequestNotificationPermission
    return new Promise((resolve) => {
      // Call: RequestNotificationPermission()
      resolve({});
    });
  }

  bindChildHistogramFetcherFactory(receiver) {
    // Method: BindChildHistogramFetcherFactory
    // Call: BindChildHistogramFetcherFactory(receiver)
  }

};

chrome.mojom.AppShimRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppShimHost
chrome.mojom.AppShimHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.AppShimHost';
  }

  focusApp() {
    // Method: FocusApp
    // Call: FocusApp()
  }

  reopenApp() {
    // Method: ReopenApp
    // Call: ReopenApp()
  }

  filesOpened(files) {
    // Method: FilesOpened
    // Call: FilesOpened(files)
  }

  profileSelectedFromMenu(profile_path) {
    // Method: ProfileSelectedFromMenu
    // Call: ProfileSelectedFromMenu(profile_path)
  }

  openAppSettings() {
    // Method: OpenAppSettings
    // Call: OpenAppSettings()
  }

  urlsOpened(urls) {
    // Method: UrlsOpened
    // Call: UrlsOpened(urls)
  }

  openAppWithOverrideUrl(override_url) {
    // Method: OpenAppWithOverrideUrl
    // Call: OpenAppWithOverrideUrl(override_url)
  }

  enableAccessibilitySupport(mode) {
    // Method: EnableAccessibilitySupport
    // Call: EnableAccessibilitySupport(mode)
  }

  applicationWillTerminate() {
    // Method: ApplicationWillTerminate
    // Call: ApplicationWillTerminate()
  }

  notificationPermissionStatusChanged(status) {
    // Method: NotificationPermissionStatusChanged
    // Call: NotificationPermissionStatusChanged(status)
  }

};

chrome.mojom.AppShimHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppShimHostBootstrap
chrome.mojom.AppShimHostBootstrapPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.AppShimHostBootstrap';
  }

  onShimConnected(host_receiver, app_shim_info) {
    // Method: OnShimConnected
    return new Promise((resolve) => {
      // Call: OnShimConnected(host_receiver, app_shim_info)
      resolve({});
    });
  }

};

chrome.mojom.AppShimHostBootstrapRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
