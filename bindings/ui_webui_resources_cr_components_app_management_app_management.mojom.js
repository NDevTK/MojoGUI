// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/app_management/app_management.mojom
// Module: app_management.mojom

'use strict';

// Module namespace
var app_management = app_management || {};
app_management.mojom = app_management.mojom || {};
var url = url || {};


// Enum: AppType
app_management.mojom.AppType = {
  kUnknown: 0,
  kArc: 1,
  kCrostini: 2,
  kChromeApp: 3,
  kWeb: 4,
  kPluginVm: 5,
  kRemote: 6,
  kBorealis: 7,
  kSystemWeb: 8,
  kExtension: 9,
  kBruschetta: 10,
};
app_management.mojom.AppTypeSpec = { $: mojo.internal.Enum() };

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
app_management.mojom.PermissionTypeSpec = { $: mojo.internal.Enum() };

// Enum: TriState
app_management.mojom.TriState = {
  kAllow: 0,
  kBlock: 1,
  kAsk: 2,
};
app_management.mojom.TriStateSpec = { $: mojo.internal.Enum() };

// Enum: InstallReason
app_management.mojom.InstallReason = {
  kUnknown: 0,
  kSystem: 1,
  kPolicy: 2,
  kOem: 3,
  kDefault: 4,
  kSync: 5,
  kUser: 6,
  kSubApp: 7,
  kKiosk: 8,
  kCommandLine: 9,
};
app_management.mojom.InstallReasonSpec = { $: mojo.internal.Enum() };

// Enum: InstallSource
app_management.mojom.InstallSource = {
  kUnknown: 0,
  kSystem: 1,
  kSync: 2,
  kPlayStore: 3,
  kChromeWebStore: 4,
  kBrowser: 5,
};
app_management.mojom.InstallSourceSpec = { $: mojo.internal.Enum() };

// Enum: WindowMode
app_management.mojom.WindowMode = {
  kUnknown: 0,
  kWindow: 1,
  kBrowser: 2,
  kTabbedWindow: 3,
};
app_management.mojom.WindowModeSpec = { $: mojo.internal.Enum() };

// Enum: RunOnOsLoginMode
app_management.mojom.RunOnOsLoginMode = {
  kUnknown: 0,
  kNotRun: 1,
  kWindowed: 2,
};
app_management.mojom.RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };

// Union: PermissionValue
app_management.mojom.PermissionValueSpec = { $: mojo.internal.Union(
    'app_management.mojom.PermissionValue', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'tristate_value': {
        'ordinal': 1,
        'type': app_management.mojom.TriStateSpec,
      }},
    })
};

// Struct: Permission
app_management.mojom.PermissionSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Permission',
      packedSize: 40,
      fields: [
        { name: 'permission_type', packedOffset: 24, packedBitOffset: 0, type: app_management.mojom.PermissionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.PermissionValueSpec, nullable: false, minVersion: 0 },
        { name: 'is_managed', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: RunOnOsLogin
app_management.mojom.RunOnOsLoginSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.RunOnOsLogin',
      packedSize: 16,
      fields: [
        { name: 'login_mode', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginModeSpec, nullable: false, minVersion: 0 },
        { name: 'is_managed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Locale
app_management.mojom.LocaleSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Locale',
      packedSize: 32,
      fields: [
        { name: 'locale_tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'native_display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: App
app_management.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.App',
      packedSize: 160,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 128, packedBitOffset: 0, type: app_management.mojom.AppTypeSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_pinned_$flag', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_pinned_$value', originalFieldName: 'is_pinned' } },
        { name: 'is_pinned_$value', packedOffset: 144, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_pinned_$flag', originalFieldName: 'is_pinned' } },
        { name: 'is_policy_pinned_$flag', packedOffset: 144, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_policy_pinned_$value', originalFieldName: 'is_policy_pinned' } },
        { name: 'is_policy_pinned_$value', packedOffset: 144, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_policy_pinned_$flag', originalFieldName: 'is_policy_pinned' } },
        { name: 'version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'permissions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(app_management.mojom.PermissionTypeSpec, app_management.mojom.PermissionSpec, false), nullable: false, minVersion: 0 },
        { name: 'install_reason', packedOffset: 132, packedBitOffset: 0, type: app_management.mojom.InstallReasonSpec, nullable: false, minVersion: 0 },
        { name: 'install_source', packedOffset: 136, packedBitOffset: 0, type: app_management.mojom.InstallSourceSpec, nullable: false, minVersion: 0 },
        { name: 'hide_more_settings', packedOffset: 144, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hide_pin_to_shelf', packedOffset: 144, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_preferred_app', packedOffset: 144, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_mode', packedOffset: 140, packedBitOffset: 0, type: app_management.mojom.WindowModeSpec, nullable: false, minVersion: 0 },
        { name: 'hide_window_mode', packedOffset: 144, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'resize_locked', packedOffset: 145, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hide_resize_locked', packedOffset: 145, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supported_links', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'run_on_os_login', packedOffset: 56, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginSpec, nullable: true, minVersion: 0 },
        { name: 'file_handling_state', packedOffset: 64, packedBitOffset: 0, type: app_management.mojom.FileHandlingStateSpec, nullable: true, minVersion: 0 },
        { name: 'app_size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'data_size', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'publisher_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'formatted_origin', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'scope_extensions', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'supported_locales', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(app_management.mojom.LocaleSpec, false), nullable: false, minVersion: 0 },
        { name: 'selected_locale', packedOffset: 120, packedBitOffset: 0, type: app_management.mojom.LocaleSpec, nullable: true, minVersion: 0 },
        { name: 'show_system_notifications_settings_link', packedOffset: 145, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_uninstall', packedOffset: 145, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_user_choice_navigation_capturing', packedOffset: 145, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 160}]
    }
  }
};

// Struct: ExtensionAppPermissionMessage
app_management.mojom.ExtensionAppPermissionMessageSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.ExtensionAppPermissionMessage',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'submessages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FileHandlingState
app_management.mojom.FileHandlingStateSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.FileHandlingState',
      packedSize: 40,
      fields: [
        { name: 'enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_managed', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_visible_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_visible_types_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'learn_more_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: PageHandlerFactory
app_management.mojom.PageHandlerFactory = {};

app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(app_management.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(app_management.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

app_management.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new app_management.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(app_management.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(app_management.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PageHandlerFactoryPtr = app_management.mojom.PageHandlerFactoryRemote;
app_management.mojom.PageHandlerFactoryRequest = app_management.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
app_management.mojom.PageHandler = {};

app_management.mojom.PageHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

app_management.mojom.PageHandler_GetApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_GetApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_GetSubAppToParentMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_SetPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetResizeLocked_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_Uninstall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_Uninstall_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_OpenNativeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetPreferredApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_preferred_app', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_GetOverlappingPreferredApps_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_UpdateAppSize_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_SetWindowMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetWindowMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'window_mode', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.WindowModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetRunOnOsLoginMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'run_on_os_login_mode', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetFileHandlingEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

app_management.mojom.PageHandler_OpenStorePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_OpenStorePage_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_SetAppLocale_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_SetAppLocale_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locale_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler_OpenSystemNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.PageHandler_GetApps_ParamsSpec,
      app_management.mojom.PageHandler_GetApps_ResponseParamsSpec,
      []);
  }

  getApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.PageHandler_GetApp_ParamsSpec,
      app_management.mojom.PageHandler_GetApp_ResponseParamsSpec,
      [app_id]);
  }

  getSubAppToParentMap() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec,
      app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec,
      []);
  }

  getExtensionAppPermissionMessages(app_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec,
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec,
      [app_id]);
  }

  setPinned(app_id, pinned) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      app_management.mojom.PageHandler_SetPinned_ParamsSpec,
      null,
      [app_id, pinned]);
  }

  setPermission(app_id, permission) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      app_management.mojom.PageHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission]);
  }

  setResizeLocked(app_id, locked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec,
      null,
      [app_id, locked]);
  }

  uninstall(app_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      app_management.mojom.PageHandler_Uninstall_ParamsSpec,
      null,
      [app_id]);
  }

  openNativeSettings(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id]);
  }

  setPreferredApp(app_id, is_preferred_app) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec,
      null,
      [app_id, is_preferred_app]);
  }

  getOverlappingPreferredApps(app_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec,
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec,
      [app_id]);
  }

  updateAppSize(app_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec,
      null,
      [app_id]);
  }

  setWindowMode(app_id, window_mode) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      app_management.mojom.PageHandler_SetWindowMode_ParamsSpec,
      null,
      [app_id, window_mode]);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [app_id, run_on_os_login_mode]);
  }

  setFileHandlingEnabled(app_id, enabled) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec,
      null,
      [app_id, enabled]);
  }

  showDefaultAppAssociationsUi() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec,
      null,
      []);
  }

  openStorePage(app_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      app_management.mojom.PageHandler_OpenStorePage_ParamsSpec,
      null,
      [app_id]);
  }

  setAppLocale(app_id, locale_tag) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      app_management.mojom.PageHandler_SetAppLocale_ParamsSpec,
      null,
      [app_id, locale_tag]);
  }

  openSystemNotificationSettings(app_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec,
      null,
      [app_id]);
  }

};

app_management.mojom.PageHandler.getRemote = function() {
  let remote = new app_management.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetApps
app_management.mojom.PageHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

app_management.mojom.PageHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(app_management.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetApp
app_management.mojom.PageHandler_GetApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_GetApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSubAppToParentMap
app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetSubAppToParentMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetSubAppToParentMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sub_app_to_parent_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetExtensionAppPermissionMessages
app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetExtensionAppPermissionMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetExtensionAppPermissionMessages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(app_management.mojom.ExtensionAppPermissionMessageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPinned
app_management.mojom.PageHandler_SetPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPermission
app_management.mojom.PageHandler_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetResizeLocked
app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetResizeLocked_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Uninstall
app_management.mojom.PageHandler_Uninstall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.Uninstall_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenNativeSettings
app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenNativeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPreferredApp
app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPreferredApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_preferred_app', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetOverlappingPreferredApps
app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetOverlappingPreferredApps_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetOverlappingPreferredApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateAppSize
app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.UpdateAppSize_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWindowMode
app_management.mojom.PageHandler_SetWindowMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetWindowMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'window_mode', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.WindowModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetRunOnOsLoginMode
app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetRunOnOsLoginMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'run_on_os_login_mode', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetFileHandlingEnabled
app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetFileHandlingEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShowDefaultAppAssociationsUi
app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.ShowDefaultAppAssociationsUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenStorePage
app_management.mojom.PageHandler_OpenStorePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenStorePage_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAppLocale
app_management.mojom.PageHandler_SetAppLocale_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetAppLocale_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locale_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenSystemNotificationSettings
app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenSystemNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PageHandlerPtr = app_management.mojom.PageHandlerRemote;
app_management.mojom.PageHandlerRequest = app_management.mojom.PageHandlerPendingReceiver;


// Interface: Page
app_management.mojom.Page = {};

app_management.mojom.Page_OnAppAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page_OnAppAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.Page_OnAppChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page_OnAppChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.Page_OnAppRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page_OnAppRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

app_management.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PagePendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppAdded(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.Page_OnAppAdded_ParamsSpec,
      null,
      [app]);
  }

  onAppChanged(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.Page_OnAppChanged_ParamsSpec,
      null,
      [update]);
  }

  onAppRemoved(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.Page_OnAppRemoved_ParamsSpec,
      null,
      [app_id]);
  }

};

app_management.mojom.Page.getRemote = function() {
  let remote = new app_management.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnAppAdded
app_management.mojom.Page_OnAppAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppChanged
app_management.mojom.Page_OnAppChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppRemoved
app_management.mojom.Page_OnAppRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PagePtr = app_management.mojom.PageRemote;
app_management.mojom.PageRequest = app_management.mojom.PagePendingReceiver;

