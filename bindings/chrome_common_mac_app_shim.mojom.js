// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mac/app_shim.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mac_notifications = mac_notifications || {};
var remote_cocoa = remote_cocoa || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};
var metrics = metrics || {};

chrome.mojom.AppShimLaunchTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimLaunchResultSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimAttentionTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimLoginItemRestoreStateSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimScreenReaderSupportModeSpec = { $: mojo.internal.Enum() };
chrome.mojom.ProfileMenuItemSpec = { $: {} };
chrome.mojom.ApplicationDockMenuItemSpec = { $: {} };
chrome.mojom.AppShimInfoSpec = { $: {} };
chrome.mojom.FeatureStateSpec = { $: {} };
chrome.mojom.AppShim = {};
chrome.mojom.AppShim.$interfaceName = 'chrome.mojom.AppShim';
chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec = { $: {} };
chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec = { $: {} };
chrome.mojom.AppShim_SetUserAttention_ParamsSpec = { $: {} };
chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec = { $: {} };
chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec = { $: {} };
chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec = { $: {} };
chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec = { $: {} };
chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost = {};
chrome.mojom.AppShimHost.$interfaceName = 'chrome.mojom.AppShimHost';
chrome.mojom.AppShimHost_FocusApp_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ReopenApp_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_FilesOpened_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec = { $: {} };
chrome.mojom.AppShimHostBootstrap = {};
chrome.mojom.AppShimHostBootstrap.$interfaceName = 'chrome.mojom.AppShimHostBootstrap';
chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec = { $: {} };
chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec = { $: {} };

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

// Struct: ProfileMenuItem
mojo.internal.Struct(
    chrome.mojom.ProfileMenuItemSpec, 'chrome.mojom.ProfileMenuItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('profile_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('menu_index', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ApplicationDockMenuItem
mojo.internal.Struct(
    chrome.mojom.ApplicationDockMenuItemSpec, 'chrome.mojom.ApplicationDockMenuItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppShimInfo
mojo.internal.Struct(
    chrome.mojom.AppShimInfoSpec, 'chrome.mojom.AppShimInfo', [
      mojo.internal.StructField('profile_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('launch_type', 24, 0, chrome.mojom.AppShimLaunchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('files', 32, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('login_item_restore_state', 40, 0, chrome.mojom.AppShimLoginItemRestoreStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('urls', 48, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('notification_action_handler', 56, 0, mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationActionHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: FeatureState
mojo.internal.Struct(
    chrome.mojom.FeatureStateSpec, 'chrome.mojom.FeatureState', [
      mojo.internal.StructField('field_trial_states', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('field_trial_params', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enable_features', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disable_features', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppShim
mojo.internal.Struct(
    chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec, 'chrome.mojom.AppShim_CreateRemoteCocoaApplication_Params', [
      mojo.internal.StructField('application', 0, 0, pending_associated_receiver<remote_cocoa.mojom.Application>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec, 'chrome.mojom.AppShim_CreateCommandDispatcherForWidget_Params', [
      mojo.internal.StructField('widget_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_SetUserAttention_ParamsSpec, 'chrome.mojom.AppShim_SetUserAttention_Params', [
      mojo.internal.StructField('attention_type', 0, 0, chrome.mojom.AppShimAttentionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec, 'chrome.mojom.AppShim_SetBadgeLabel_Params', [
      mojo.internal.StructField('badge_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateProfileMenu_Params', [
      mojo.internal.StructField('profile_menu_items', 0, 0, mojo.internal.Array(chrome.mojom.ProfileMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateApplicationDockMenu_Params', [
      mojo.internal.StructField('dock_menu_items', 0, 0, mojo.internal.Array(chrome.mojom.ApplicationDockMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec, 'chrome.mojom.AppShim_BindNotificationProvider_Params', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mac_notifications.mojom.RequestPermissionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec, 'chrome.mojom.AppShim_BindChildHistogramFetcherFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec,
      null,
      [application],
      false);
  }

  createCommandDispatcherForWidget(widget_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec,
      null,
      [widget_id],
      false);
  }

  setUserAttention(attention_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.AppShim_SetUserAttention_ParamsSpec,
      null,
      [attention_type],
      false);
  }

  setBadgeLabel(badge_label) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec,
      null,
      [badge_label],
      false);
  }

  updateProfileMenu(profile_menu_items) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec,
      null,
      [profile_menu_items],
      false);
  }

  updateApplicationDockMenu(dock_menu_items) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec,
      null,
      [dock_menu_items],
      false);
  }

  bindNotificationProvider(provider) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec,
      null,
      [provider],
      false);
  }

  requestNotificationPermission() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec,
      chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec,
      [],
      false);
  }

  bindChildHistogramFetcherFactory(receiver) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec,
      null,
      [receiver],
      false);
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
};

chrome.mojom.AppShimReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createRemoteCocoaApplication(params.application);
          break;
        }
        case 1: {
          const params = chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCommandDispatcherForWidget(params.widget_id);
          break;
        }
        case 2: {
          const params = chrome.mojom.AppShim_SetUserAttention_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserAttention(params.attention_type);
          break;
        }
        case 3: {
          const params = chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBadgeLabel(params.badge_label);
          break;
        }
        case 4: {
          const params = chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateProfileMenu(params.profile_menu_items);
          break;
        }
        case 5: {
          const params = chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateApplicationDockMenu(params.dock_menu_items);
          break;
        }
        case 6: {
          const params = chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindNotificationProvider(params.provider);
          break;
        }
        case 7: {
          const params = chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestNotificationPermission();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindChildHistogramFetcherFactory(params.receiver);
          break;
        }
      }
    }});
  }
};

chrome.mojom.AppShimReceiver = chrome.mojom.AppShimReceiver;

chrome.mojom.AppShimPtr = chrome.mojom.AppShimRemote;
chrome.mojom.AppShimRequest = chrome.mojom.AppShimPendingReceiver;


// Interface: AppShimHost
mojo.internal.Struct(
    chrome.mojom.AppShimHost_FocusApp_ParamsSpec, 'chrome.mojom.AppShimHost_FocusApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ReopenApp_ParamsSpec, 'chrome.mojom.AppShimHost_ReopenApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_FilesOpened_ParamsSpec, 'chrome.mojom.AppShimHost_FilesOpened_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec, 'chrome.mojom.AppShimHost_ProfileSelectedFromMenu_Params', [
      mojo.internal.StructField('profile_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec, 'chrome.mojom.AppShimHost_UrlsOpened_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_Params', [
      mojo.internal.StructField('override_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec, 'chrome.mojom.AppShimHost_EnableAccessibilitySupport_Params', [
      mojo.internal.StructField('mode', 0, 0, chrome.mojom.AppShimScreenReaderSupportModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec, 'chrome.mojom.AppShimHost_ApplicationWillTerminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec, 'chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, mac_notifications.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      chrome.mojom.AppShimHost_FocusApp_ParamsSpec,
      null,
      [],
      false);
  }

  reopenApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.AppShimHost_ReopenApp_ParamsSpec,
      null,
      [],
      false);
  }

  filesOpened(files) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.AppShimHost_FilesOpened_ParamsSpec,
      null,
      [files],
      false);
  }

  profileSelectedFromMenu(profile_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec,
      null,
      [profile_path],
      false);
  }

  openAppSettings() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec,
      null,
      [],
      false);
  }

  urlsOpened(urls) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec,
      null,
      [urls],
      false);
  }

  openAppWithOverrideUrl(override_url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec,
      null,
      [override_url],
      false);
  }

  enableAccessibilitySupport(mode) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec,
      null,
      [mode],
      false);
  }

  applicationWillTerminate() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec,
      null,
      [],
      false);
  }

  notificationPermissionStatusChanged(status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec,
      null,
      [status],
      false);
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
};

chrome.mojom.AppShimHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.AppShimHost_FocusApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.focusApp();
          break;
        }
        case 1: {
          const params = chrome.mojom.AppShimHost_ReopenApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reopenApp();
          break;
        }
        case 2: {
          const params = chrome.mojom.AppShimHost_FilesOpened_ParamsSpec.$.decode(message.payload);
          const result = this.impl.filesOpened(params.files);
          break;
        }
        case 3: {
          const params = chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.profileSelectedFromMenu(params.profile_path);
          break;
        }
        case 4: {
          const params = chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openAppSettings();
          break;
        }
        case 5: {
          const params = chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec.$.decode(message.payload);
          const result = this.impl.urlsOpened(params.urls);
          break;
        }
        case 6: {
          const params = chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openAppWithOverrideUrl(params.override_url);
          break;
        }
        case 7: {
          const params = chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableAccessibilitySupport(params.mode);
          break;
        }
        case 8: {
          const params = chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.applicationWillTerminate();
          break;
        }
        case 9: {
          const params = chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notificationPermissionStatusChanged(params.status);
          break;
        }
      }
    }});
  }
};

chrome.mojom.AppShimHostReceiver = chrome.mojom.AppShimHostReceiver;

chrome.mojom.AppShimHostPtr = chrome.mojom.AppShimHostRemote;
chrome.mojom.AppShimHostRequest = chrome.mojom.AppShimHostPendingReceiver;


// Interface: AppShimHostBootstrap
mojo.internal.Struct(
    chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_Params', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.AppShimHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('app_shim_info', 8, 0, chrome.mojom.AppShimInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParams', [
      mojo.internal.StructField('launch_result', 0, 0, chrome.mojom.AppShimLaunchResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_state', 8, 0, chrome.mojom.FeatureStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_shim_receiver', 16, 0, mojo.internal.InterfaceRequest(chrome.mojom.AppShimSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec,
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec,
      [host_receiver, app_shim_info],
      false);
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
};

chrome.mojom.AppShimHostBootstrapReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onShimConnected(params.host_receiver, params.app_shim_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

chrome.mojom.AppShimHostBootstrapReceiver = chrome.mojom.AppShimHostBootstrapReceiver;

chrome.mojom.AppShimHostBootstrapPtr = chrome.mojom.AppShimHostBootstrapRemote;
chrome.mojom.AppShimHostBootstrapRequest = chrome.mojom.AppShimHostBootstrapPendingReceiver;

