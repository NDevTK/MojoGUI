// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mac/app_shim.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: AppShimLaunchType
chrome.mojom.AppShimLaunchType = {
  kRegisterOnly: 0,
  kNormal: 1,
  kNotificationAction: 2,
};

// Enum: AppShimLaunchResult
chrome.mojom.AppShimLaunchResult = {
  kSuccess: 0,
  kSuccessAndDisconnect: 1,
  kDuplicateHost: 2,
  kProfileNotFound: 3,
  kAppNotFound: 4,
  kProfileLocked: 5,
  kFailedValidation: 6,
};

// Enum: AppShimAttentionType
chrome.mojom.AppShimAttentionType = {
  kCancel: 0,
  kCritical: 1,
};

// Enum: AppShimLoginItemRestoreState
chrome.mojom.AppShimLoginItemRestoreState = {
  kNone: 0,
  kWindowed: 1,
  kHidden: 2,
};

// Enum: AppShimScreenReaderSupportMode
chrome.mojom.AppShimScreenReaderSupportMode = {
  kPartial: 0,
  kComplete: 1,
};

// Interface: AppShim
chrome.mojom.AppShimPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShim';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.AppShimRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRemoteCocoaApplication(application) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec.$,
      null,
      [application]);
  }

  createCommandDispatcherForWidget(widget_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec.$,
      null,
      [widget_id]);
  }

  setUserAttention(attention_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.AppShim_SetUserAttention_ParamsSpec.$,
      null,
      [attention_type]);
  }

  setBadgeLabel(badge_label) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec.$,
      null,
      [badge_label]);
  }

  updateProfileMenu(profile_menu_items) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec.$,
      null,
      [profile_menu_items]);
  }

  updateApplicationDockMenu(dock_menu_items) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec.$,
      null,
      [dock_menu_items]);
  }

  bindNotificationProvider(provider) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec.$,
      null,
      [provider]);
  }

  requestNotificationPermission() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec.$,
      chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec.$,
      []);
  }

  bindChildHistogramFetcherFactory(receiver) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec.$,
      null,
      [receiver]);
  }

};

chrome.mojom.AppShim.getRemote = function() {
  let remote = new chrome.mojom.AppShimRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShim',
    'context');
  return remote.$;
}};

// ParamsSpec for CreateRemoteCocoaApplication
chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.CreateRemoteCocoaApplication_Params',
      packedSize: 16,
      fields: [
        { name: 'application', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateCommandDispatcherForWidget
chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.CreateCommandDispatcherForWidget_Params',
      packedSize: 16,
      fields: [
        { name: 'widget_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetUserAttention
chrome.mojom.AppShim_SetUserAttention_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.SetUserAttention_Params',
      packedSize: 16,
      fields: [
        { name: 'attention_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetBadgeLabel
chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.SetBadgeLabel_Params',
      packedSize: 16,
      fields: [
        { name: 'badge_label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateProfileMenu
chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.UpdateProfileMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_menu_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateApplicationDockMenu
chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.UpdateApplicationDockMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'dock_menu_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindNotificationProvider
chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.BindNotificationProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestNotificationPermission
chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.RequestNotificationPermission_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.RequestNotificationPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindChildHistogramFetcherFactory
chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShim.BindChildHistogramFetcherFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.AppShimPtr = chrome.mojom.AppShimRemote;
chrome.mojom.AppShimRequest = chrome.mojom.AppShimPendingReceiver;


// Interface: AppShimHost
chrome.mojom.AppShimHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.AppShimHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.AppShimHost_FocusApp_ParamsSpec.$,
      null,
      []);
  }

  reopenApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.AppShimHost_ReopenApp_ParamsSpec.$,
      null,
      []);
  }

  filesOpened(files) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.AppShimHost_FilesOpened_ParamsSpec.$,
      null,
      [files]);
  }

  profileSelectedFromMenu(profile_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec.$,
      null,
      [profile_path]);
  }

  openAppSettings() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec.$,
      null,
      []);
  }

  urlsOpened(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec.$,
      null,
      [urls]);
  }

  openAppWithOverrideUrl(override_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec.$,
      null,
      [override_url]);
  }

  enableAccessibilitySupport(mode) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec.$,
      null,
      [mode]);
  }

  applicationWillTerminate() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec.$,
      null,
      []);
  }

  notificationPermissionStatusChanged(status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec.$,
      null,
      [status]);
  }

};

chrome.mojom.AppShimHost.getRemote = function() {
  let remote = new chrome.mojom.AppShimHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHost',
    'context');
  return remote.$;
}};

// ParamsSpec for FocusApp
chrome.mojom.AppShimHost_FocusApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.FocusApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReopenApp
chrome.mojom.AppShimHost_ReopenApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ReopenApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FilesOpened
chrome.mojom.AppShimHost_FilesOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.FilesOpened_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ProfileSelectedFromMenu
chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ProfileSelectedFromMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenAppSettings
chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.OpenAppSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UrlsOpened
chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.UrlsOpened_Params',
      packedSize: 16,
      fields: [
        { name: 'urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenAppWithOverrideUrl
chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.OpenAppWithOverrideUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'override_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableAccessibilitySupport
chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.EnableAccessibilitySupport_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ApplicationWillTerminate
chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.ApplicationWillTerminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for NotificationPermissionStatusChanged
chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHost.NotificationPermissionStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.AppShimHostPtr = chrome.mojom.AppShimHostRemote;
chrome.mojom.AppShimHostRequest = chrome.mojom.AppShimHostPendingReceiver;


// Interface: AppShimHostBootstrap
chrome.mojom.AppShimHostBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimHostBootstrapRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHostBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimHostBootstrapPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimHostBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.AppShimHostBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShimConnected(host_receiver, app_shim_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec.$,
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec.$,
      [host_receiver, app_shim_info]);
  }

};

chrome.mojom.AppShimHostBootstrap.getRemote = function() {
  let remote = new chrome.mojom.AppShimHostBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHostBootstrap',
    'context');
  return remote.$;
}};

// ParamsSpec for OnShimConnected
chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHostBootstrap.OnShimConnected_Params',
      packedSize: 24,
      fields: [
        { name: 'host_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_shim_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AppShimHostBootstrap.OnShimConnected_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'launch_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'feature_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_shim_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.AppShimHostBootstrapPtr = chrome.mojom.AppShimHostBootstrapRemote;
chrome.mojom.AppShimHostBootstrapRequest = chrome.mojom.AppShimHostBootstrapPendingReceiver;

