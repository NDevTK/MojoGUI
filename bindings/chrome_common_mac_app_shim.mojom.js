// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mac/app_shim.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: AppShimLaunchType
chrome.mojom.mojom.AppShimLaunchType = {
  kRegisterOnly: 0,
  kNormal: 1,
  kNotificationAction: 2,
};
chrome.mojom.mojom.AppShimLaunchTypeSpec = { $: mojo.internal.Enum() };

// Enum: AppShimLaunchResult
chrome.mojom.mojom.AppShimLaunchResult = {
  kSuccess: 0,
  kSuccessAndDisconnect: 1,
  kDuplicateHost: 2,
  kProfileNotFound: 3,
  kAppNotFound: 4,
  kProfileLocked: 5,
  kFailedValidation: 6,
};
chrome.mojom.mojom.AppShimLaunchResultSpec = { $: mojo.internal.Enum() };

// Enum: AppShimAttentionType
chrome.mojom.mojom.AppShimAttentionType = {
  kCancel: 0,
  kCritical: 1,
};
chrome.mojom.mojom.AppShimAttentionTypeSpec = { $: mojo.internal.Enum() };

// Enum: AppShimLoginItemRestoreState
chrome.mojom.mojom.AppShimLoginItemRestoreState = {
  kNone: 0,
  kWindowed: 1,
  kHidden: 2,
};
chrome.mojom.mojom.AppShimLoginItemRestoreStateSpec = { $: mojo.internal.Enum() };

// Enum: AppShimScreenReaderSupportMode
chrome.mojom.mojom.AppShimScreenReaderSupportMode = {
  kPartial: 0,
  kComplete: 1,
};
chrome.mojom.mojom.AppShimScreenReaderSupportModeSpec = { $: mojo.internal.Enum() };

// Struct: ProfileMenuItem
chrome.mojom.mojom.ProfileMenuItemSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileMenuItem',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
        { name: 'menu_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'profile_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ApplicationDockMenuItem
chrome.mojom.mojom.ApplicationDockMenuItemSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ApplicationDockMenuItem',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AppShimInfo
chrome.mojom.mojom.AppShimInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimInfo',
      packedSize: 64,
      fields: [
        { name: 'profile_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'launch_type', packedOffset: 48, packedBitOffset: 0, type: chrome.mojom.AppShimLaunchTypeSpec, nullable: false, minVersion: 0 },
        { name: 'files', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'login_item_restore_state', packedOffset: 52, packedBitOffset: 0, type: chrome.mojom.AppShimLoginItemRestoreStateSpec, nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'notification_action_handler', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationActionHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: FeatureState
chrome.mojom.mojom.FeatureStateSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FeatureState',
      packedSize: 40,
      fields: [
        { name: 'field_trial_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'field_trial_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enable_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disable_features', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: AppShim
chrome.mojom.mojom.AppShim = {};

chrome.mojom.mojom.AppShimPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.AppShimRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShim';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.AppShimPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.AppShimRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.AppShimRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRemoteCocoaApplication(application) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec,
      null,
      [application]);
  }

  createCommandDispatcherForWidget(widget_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec,
      null,
      [widget_id]);
  }

  setUserAttention(attention_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.mojom.AppShim_SetUserAttention_ParamsSpec,
      null,
      [attention_type]);
  }

  setBadgeLabel(badge_label) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.mojom.AppShim_SetBadgeLabel_ParamsSpec,
      null,
      [badge_label]);
  }

  updateProfileMenu(profile_menu_items) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.mojom.AppShim_UpdateProfileMenu_ParamsSpec,
      null,
      [profile_menu_items]);
  }

  updateApplicationDockMenu(dock_menu_items) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec,
      null,
      [dock_menu_items]);
  }

  bindNotificationProvider(provider) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.mojom.AppShim_BindNotificationProvider_ParamsSpec,
      null,
      [provider]);
  }

  requestNotificationPermission() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.mojom.AppShim_RequestNotificationPermission_ParamsSpec,
      chrome.mojom.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec,
      []);
  }

  bindChildHistogramFetcherFactory(receiver) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec,
      null,
      [receiver]);
  }

};

chrome.mojom.mojom.AppShim.getRemote = function() {
  let remote = new chrome.mojom.mojom.AppShimRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShim',
    'context');
  return remote.$;
};

// ParamsSpec for CreateRemoteCocoaApplication
chrome.mojom.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.CreateRemoteCocoaApplication_Params',
      packedSize: 16,
      fields: [
        { name: 'application', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(remote_cocoa.mojom.ApplicationRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateCommandDispatcherForWidget
chrome.mojom.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.CreateCommandDispatcherForWidget_Params',
      packedSize: 16,
      fields: [
        { name: 'widget_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserAttention
chrome.mojom.mojom.AppShim_SetUserAttention_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.SetUserAttention_Params',
      packedSize: 16,
      fields: [
        { name: 'attention_type', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.AppShimAttentionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBadgeLabel
chrome.mojom.mojom.AppShim_SetBadgeLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.SetBadgeLabel_Params',
      packedSize: 16,
      fields: [
        { name: 'badge_label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateProfileMenu
chrome.mojom.mojom.AppShim_UpdateProfileMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.UpdateProfileMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_menu_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ProfileMenuItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateApplicationDockMenu
chrome.mojom.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.UpdateApplicationDockMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'dock_menu_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ApplicationDockMenuItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindNotificationProvider
chrome.mojom.mojom.AppShim_BindNotificationProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.BindNotificationProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestNotificationPermission
chrome.mojom.mojom.AppShim_RequestNotificationPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.RequestNotificationPermission_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.RequestNotificationPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mac_notifications.mojom.RequestPermissionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindChildHistogramFetcherFactory
chrome.mojom.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.BindChildHistogramFetcherFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.AppShimPtr = chrome.mojom.mojom.AppShimRemote;
chrome.mojom.mojom.AppShimRequest = chrome.mojom.mojom.AppShimPendingReceiver;


// Interface: AppShimHost
chrome.mojom.mojom.AppShimHost = {};

chrome.mojom.mojom.AppShimHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.AppShimHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.AppShimHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.AppShimHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.AppShimHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.AppShimHost_FocusApp_ParamsSpec,
      null,
      []);
  }

  reopenApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.AppShimHost_ReopenApp_ParamsSpec,
      null,
      []);
  }

  filesOpened(files) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.mojom.AppShimHost_FilesOpened_ParamsSpec,
      null,
      [files]);
  }

  profileSelectedFromMenu(profile_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec,
      null,
      [profile_path]);
  }

  openAppSettings() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.mojom.AppShimHost_OpenAppSettings_ParamsSpec,
      null,
      []);
  }

  urlsOpened(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.mojom.AppShimHost_UrlsOpened_ParamsSpec,
      null,
      [urls]);
  }

  openAppWithOverrideUrl(override_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec,
      null,
      [override_url]);
  }

  enableAccessibilitySupport(mode) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec,
      null,
      [mode]);
  }

  applicationWillTerminate() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec,
      null,
      []);
  }

  notificationPermissionStatusChanged(status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec,
      null,
      [status]);
  }

};

chrome.mojom.mojom.AppShimHost.getRemote = function() {
  let remote = new chrome.mojom.mojom.AppShimHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHost',
    'context');
  return remote.$;
};

// ParamsSpec for FocusApp
chrome.mojom.mojom.AppShimHost_FocusApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.FocusApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReopenApp
chrome.mojom.mojom.AppShimHost_ReopenApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ReopenApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for FilesOpened
chrome.mojom.mojom.AppShimHost_FilesOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.FilesOpened_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProfileSelectedFromMenu
chrome.mojom.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ProfileSelectedFromMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenAppSettings
chrome.mojom.mojom.AppShimHost_OpenAppSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.OpenAppSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UrlsOpened
chrome.mojom.mojom.AppShimHost_UrlsOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.UrlsOpened_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenAppWithOverrideUrl
chrome.mojom.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.OpenAppWithOverrideUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'override_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableAccessibilitySupport
chrome.mojom.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.EnableAccessibilitySupport_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.AppShimScreenReaderSupportModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplicationWillTerminate
chrome.mojom.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ApplicationWillTerminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotificationPermissionStatusChanged
chrome.mojom.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.NotificationPermissionStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mac_notifications.mojom.PermissionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.AppShimHostPtr = chrome.mojom.mojom.AppShimHostRemote;
chrome.mojom.mojom.AppShimHostRequest = chrome.mojom.mojom.AppShimHostPendingReceiver;


// Interface: AppShimHostBootstrap
chrome.mojom.mojom.AppShimHostBootstrap = {};

chrome.mojom.mojom.AppShimHostBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.AppShimHostBootstrapRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHostBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.AppShimHostBootstrapPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.AppShimHostBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.AppShimHostBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShimConnected(host_receiver, app_shim_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec,
      chrome.mojom.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec,
      [host_receiver, app_shim_info]);
  }

};

chrome.mojom.mojom.AppShimHostBootstrap.getRemote = function() {
  let remote = new chrome.mojom.mojom.AppShimHostBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHostBootstrap',
    'context');
  return remote.$;
};

// ParamsSpec for OnShimConnected
chrome.mojom.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHostBootstrap.OnShimConnected_Params',
      packedSize: 24,
      fields: [
        { name: 'host_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chrome.mojom.AppShimHostRemote), nullable: false, minVersion: 0 },
        { name: 'app_shim_info', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.AppShimInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHostBootstrap.OnShimConnected_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'launch_result', packedOffset: 16, packedBitOffset: 0, type: chrome.mojom.AppShimLaunchResultSpec, nullable: false, minVersion: 0 },
        { name: 'feature_state', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.FeatureStateSpec, nullable: false, minVersion: 0 },
        { name: 'app_shim_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chrome.mojom.AppShimRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.AppShimHostBootstrapPtr = chrome.mojom.mojom.AppShimHostBootstrapRemote;
chrome.mojom.mojom.AppShimHostBootstrapRequest = chrome.mojom.mojom.AppShimHostBootstrapPendingReceiver;

